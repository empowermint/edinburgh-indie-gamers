import Head from 'next/head';
import { Component } from 'react';
// import { isThisSecond, parseISO } from 'date-fns';
import {getPostSlugs, getContents} from '../lib/usemd';
import Menu from '../components/Menu';
import { displayDate } from '../lib/dates';

export default class Post extends Component {
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <header>
          <Menu />
        </header>
        <article>
          <h1>{this.props.title}</h1>
          <div className="post-info">
            <span>by {this.props.author} </span>
            <span>on {displayDate(this.props.date)}</span>
          </div>
          <div className="post-content" dangerouslySetInnerHTML={{__html: (this.props.content)}}>
          </div>
        </article>
      </>
    )
  }
}

export async function getStaticPaths() {
  const paths = getPostSlugs();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getContents(params.postSlug[1], 'post');
  return {
    props: {
      slug: params.postSlug.join('/'),
      title: post.yaml.title,
      author: post.yaml.author,
      date: post.yaml.date.toJSON(),
      category: post.yaml.category,
      content: post.content
    }
  }
}
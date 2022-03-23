import Head from 'next/head';
import { Component } from 'react';
// import { isThisSecond, parseISO } from 'date-fns';
import {getFileSlugs, getPost} from '../lib/usemd';

export default class Post extends Component {
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <article>
          <h1>{this.props.title}</h1>
          <div className="post-info">
            <span>by {this.props.author} </span>
            <span>on {this.props.dateISO}</span>
          </div>
          <div className="post-content" dangerouslySetInnerHTML={{__html: (this.props.content)}}>
          </div>
        </article>
      </>
    )
  }
}

export async function getStaticPaths() {
  const paths = getFileSlugs(directory);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getPost(params.postSlug[1]);
  return {
    props: {
      title: post.yaml.title,
      author: post.yaml.author,
      dateISO: post.yaml.date.toISOString(),
      category: post.yaml.category,
      content: post.content
    }
  }
}
import Head from 'next/head';
import { Component } from 'react';
import {getPageSlugs, getContents} from '../lib/usemd';
import Menu from '../components/Menu';

export default class Page extends Component {
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
          <div className="post-content" dangerouslySetInnerHTML={{__html: (this.props.content)}}>
          </div>
        </article>
      </>
    )
  }
}

export async function getStaticPaths() {
  const paths = getPageSlugs();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getContents(params.pageSlug, 'page');
  return {
    props: {
      title: post.yaml.title,
      content: post.content
    }
  }
}

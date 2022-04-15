import Head from 'next/head';
import { Component } from 'react';
import {getPageSlugs, getContents} from '../lib/usemd';
import Layout from '../components/Layout';

export default class Page extends Component {
  render() {
    return (
      <Layout title={this.props.title} description={this.props.description}>
        <article>
          <h1>{this.props.title}</h1>
          <div className="post-content" dangerouslySetInnerHTML={{__html: (this.props.content)}}>
          </div>
        </article>
      </Layout>
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
      content: post.content,
      description: post.yaml.description
    }
  }
}

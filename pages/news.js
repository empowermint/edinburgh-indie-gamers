import Head from 'next/head';
import { Component } from 'react';
import { getPostSlugs } from '../lib/usemd';
import { displayDate } from '../lib/dates';
import Layout from '../components/Layout';
import Link from 'next/link';

export default class News extends Component {
  render() {
    return (
      <Layout title="News - Edinburgh Indie Gamers" description="News from the Edinburgh Indie Gamers">
        <h1>News</h1>
        <ol className="post-preview">
          {this.props.allPostsData
          .slice(0, 12).
          map((post) => (
            <li key={post.params.postSlug[1]} className="post-preview__item">
              <Link href={`/${encodeURIComponent(post.params.postSlug[0])}/${encodeURIComponent(post.params.postSlug[1])}`}>
                <h4>{post.params.title}</h4>
                <div className="post-preview__info">
                  <span>Posted on <span>{displayDate(post.params.date)}</span> </span>
                  <span>by <span>{post.params.author}</span></span>
                </div>
                <div
                  className="post-preview__content"
                  dangerouslySetInnerHTML={{__html: (post.params.preview)}}
                ></div>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    )
  }
}

export async function getStaticProps() {
  const allPostsData = getPostSlugs();
  return {
    props: {
      allPostsData
    }
  }
}

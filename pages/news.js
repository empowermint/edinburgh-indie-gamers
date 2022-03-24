import Head from 'next/head';
import { Component } from 'react';
import { getPostSlugs } from '../lib/usemd';
import { displayDate } from '../lib/dates';
import Menu from '../components/Menu';
import Link from 'next/link';

export default class News extends Component {
  render() {
    return (
      <>
        <Head>
          <title>News</title>
        </Head>
        <header>
          <Menu />
        </header>
        <main>
          <h2>News</h2>
          <ol className="post-preview">
            {this.props.allPostsData
            .slice(0, 12).
            map((post) => (
              <li key={post.params.postSlug[1]} className="post-preview__item">
                <Link href={`/${encodeURIComponent(post.params.postSlug[0])}/${encodeURIComponent(post.params.postSlug[1])}`}>
                  <a>
                    <h4>{post.params.title}</h4>
                    <div className="post-preview__info">
                      <span>Posted on <span>{displayDate(post.params.date)}</span> </span>
                      <span>by <span>{post.params.author}</span></span>
                    </div>
                  </a>
                </Link>
                <div
                  className="post-preview__content"
                  dangerouslySetInnerHTML={{__html: (post.params.preview)}}
                ></div>
              </li>
            ))}
          </ol>
        </main>
      </>
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

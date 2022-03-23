import Head from 'next/head';
import { Component } from 'react';
import {getPostSlugs} from '../lib/usemd';
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
          {console.log(this.props)}
          <ol>
            {this.props.allPostsData.map((post) => (
              <Link href="/"><a>
                <li key={post.params.postSlug}>
                  <h4>{post.params.postSlug}</h4>
                  <p>
                    Posted on <span>{post.params.date} </span>
                    by <span>{post.params.author}</span>
                  </p>
                    {/* TODO: Add post previews */}
                </li>
              </a></Link>
            ))}
          </ol>
        </main>
      </>
    )
  }
}

// export async function getStaticProps({ params }) {
//   // const post = getContents(params.postSlug[1], 'post');
//   return {
//     props: {
//       title: "News"
//     }
//   }
// }

export async function getStaticProps() {
  const allPostsData = getPostSlugs();
  return {
    props: {
      allPostsData
    }
  }
}
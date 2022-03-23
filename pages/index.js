import { Component } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

export default class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Edinburgh Indie Gamers - Home</title>
        </Head>
        <header>
          <Menu />
          <h1>Edinburgh Indie Gamers</h1>
        </header>
        <main>
          <p>Content goes here</p>
        </main>
      </>
    )
  }
}

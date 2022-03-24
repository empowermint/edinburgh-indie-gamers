import { Component } from 'react';
import Layout from '../components/Layout';

export default class Home extends Component {
  render() {
    return (
      <>
        <Layout title="Edinburgh Indie Gamers - Home">
          <div className="hero">
            <h1>Edinburgh Indie Gamers</h1>
          </div>
          <p>Content goes here</p>
        </Layout>
      </>
    )
  }
}

import { Component } from 'react';
import Link from 'next/link'

export default class Menu extends Component {
  render() {
    return(
      <>
        <h3>Edinburgh Indie Gamers</h3>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/code-of-conduct">
              <a>Code of Conduct</a>
            </Link>
          </li>
        </ul>
      </>
    )
  }
}

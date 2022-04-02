import { Component } from 'react';
import Link from 'next/link'

export default class Menu extends Component {
  handleHamburgerClick(e) {
    const closeIcon = document.getElementById('menu__hamburger-close');
    const openIcon = document.getElementById('menu__hamburger-open');
    const mainMenu = document.getElementById('main-menu');

    if (e.target.data === 'closed') {
      closeIcon.style.display = 'none';
      openIcon.style.display = 'inline';
      e.target.data = 'open';
      mainMenu.classList.remove('menu-open');
    } else {
      openIcon.style.display = 'none';
      closeIcon.style.display = 'inline';
      e.target.data = 'closed';
      mainMenu.classList.add('menu-open');
    }
  }

  render() {
    return(
      <>
        <nav id="main-menu">
          <ul className="main-menu">
            <li>
              <Link href="/">
                <a className="main-menu__link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a className="main-menu__link">News</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a className="main-menu__link">Events</a>
              </Link>
            </li>
            <li>
              <Link href="/code-of-conduct">
                <a className="main-menu__link">Code of Conduct</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button id="menu__hamburger" onClick={this.handleHamburgerClick} data="closed">
          <span id="menu__hamburger-open">☰</span>
          <span id="menu__hamburger-close">x</span>
        </button>
      </>
    )
  }
}

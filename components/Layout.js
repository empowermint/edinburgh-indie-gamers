import Head from 'next/head';
import Menu from './Menu';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="header">
        <Link href="./">
          <a><h3>Edinburgh Indie Gamers</h3></a>
        </Link>
        <Menu />
      </header>
      <main>{children}</main>
      <footer>
        <small>
          This website was designed and coded with {'<3'} by <a href="http://github.com/empowermint/">James T. Harding</a>
        </small>
      </footer>
    </>
  )
}

Layout.defaultProps = {
  title: 'Edinburgh Indie Gamers'
};

import Head from 'next/head';
import Menu from './Menu';
import Link from 'next/link';

export default function Layout({ meta, children }) {
  const { title, description } = meta;
  
  return (
    <>
      <Head>
        <title>{title + " | Edinburgh Indie Gamers"}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <header className="header">
        <Link href="./" className="site-title">
          <h3>Edinburgh Indie Gamers</h3>
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

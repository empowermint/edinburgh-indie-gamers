import { Component } from 'react';
import Layout from '../components/Layout';

export default class Home extends Component {
  render() {
    return (
      <>
        <Layout title="Edinburgh Indie Gamers - Home">
          <div className="hero">
            <h1>Edinburgh Indie Gamers</h1>
            <span>Independent since 1649</span>
          </div>
          <section>
            <h2>Welcome</h2>
            <p>Edinburgh Indie Gamers is an inclusive gaming club dedicated to indie roleplaying and story games.</p>
          </section>
          <section>
            <h2>What is a indie roleplaying and/or story game?</h2>
            <p>We plan small-press roleplaying games, narrative games, Nordic-style games, diceless games, GMful and GMless games, PbTA games... The types of games which let players tell a story together. Indie card and war games are also discussed and played here.</p>
            <p>If you're not what any of this means, that's a sign you need to get stuck in and join us. (The water's lovely...)</p>
            <p>Many of our members enjoy and play board games, computer games, and traditional RPGs such as {'D&D'}. However, these are generally not discussed at Edinburgh Indie Gamers. This is important to us because gaming spaces tend to be dominated by those games. Here's one that isn't!</p>
          </section>
          <section>
            <h2>Fun for Everyone</h2>
            <p>We want our group to be a welcoming and safe community. That's why we have <a href="/code-of-conduct">a code of conduct</a> which we ask you to read and uphold while taking part in our spaces, online and in person.</p>
          </section>
          <section>
            <h2>Join the Discord</h2>
            <p>You can join our Discord server to chat with members and co-ordinate online games. Generally, members should be from Edinburgh, Scotland and its nearby regions, but we're also open to folks who are geographically remote or otherwise isolated.</p>
          </section>
          <section>
            <h2>Awesome Zine</h2>
            <p>In 2021 we crowdfunded a Zine to share games, art and articles by our community with the wider world. One of the things the zine funded was a website for our club. This is that website!</p>
            <p>We would love for you to read, print, enjoy, translate and generally consume our zine. You can <a href="https://empowermint.itch.io/edinburgh-indie-gamers-zine-2021">download it for free on itch.io</a></p>
          </section>
        </Layout>
      </>
    )
  }
}

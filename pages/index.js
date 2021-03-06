import { Component } from 'react';
import Layout from '../components/Layout';

export default class Home extends Component {
  render() {
    return (
      <>
        <Layout title="Edinburgh Indie Gamers - Home" description="Edinburgh Indie Gamers - RPGs and story games">
          <div className="hero">
            <h1>Edinburgh Indie Gamers</h1>
            <svg viewBox="0 0 187 45" xmlns="http://www.w3.org/2000/svg">
              <text x="11%" y="45%" className="hero__title">Edinburgh</text>
              <text y="95%" className="hero__title">Indie Gamers</text>
            </svg>
            <img class="cupid-banner__background" src="../images/eig-banner-angels-compressed.svg" alt="Two cupids hold aloft a banner with the tagline" />
            <svg class="cupid-banner__banner" viewBox="0 0 500 60" xmlns="http://www.w3.org/2000/svg">
              <path id="banner-path" fill="none" stroke="none" d="M0,50 Q 225,70 500,-10" />
              <text className="cupid-banner__text">
                <textPath href="#banner-path">
                  Story Games | Small Press | Indie RPGs | PbtA
                </textPath>
              </text>
            </svg>
          </div>
          <section>
            <h2>Welcome</h2>
            <p>Edinburgh Indie Gamers is an inclusive gaming club dedicated to indie roleplaying and story games.</p>
          </section>
          <section>
            <h2>What is a indie game?</h2>
            <p>We play small-press roleplaying games, narrative games, Nordic-style games, diceless games, GMful and GMless games, PbTA games... The types of games which let players tell a story together.</p>
            <p>If you're not sure what any of this means, that's a sign you need to get stuck in and join us. (The water's lovely...)</p>
          </section>
          <section>
            <h2>Fun for Everyone</h2>
            <p>We want our group to be a welcoming and safe community. That's why we have <a href="/code-of-conduct">a code of conduct</a> which we ask you to read and uphold while taking part in our spaces, online and in person.</p>
          </section>
          <section>
            <h2>Join the Discord</h2>
            <p>You can <a href="https://discord.gg/6vNbsq5tSV" alt="EIG Discord server invitation">join our Discord server</a> to chat with members and co-ordinate online games. Generally, members should be from Edinburgh, Scotland and its nearby regions, but we're also open to folks who are geographically remote or otherwise isolated.</p>
          </section>
          <section>
            <h2>Awesome Zine</h2>
            <p>In 2021 we crowdfunded a zine to share games, art and articles by our community with the wider world. One of the things the zine funded was a website for our club. This is that website!</p>
            <p>We would love for you to read, print, enjoy, translate and generally consume our zine. You can <a href="https://empowermint.itch.io/edinburgh-indie-gamers-zine-2021">download it for free on itch.io</a></p>
            <a class="cupid__link" href="https://empowermint.itch.io/edinburgh-indie-gamers-zine-2021"><img class="cupid cupid__feature" src="images/eig-feature-cupid-compressed.svg" alt="A cupid holds a copy of the EIG zine" /></a>
          </section>
        </Layout>
      </>
    )
  }
}

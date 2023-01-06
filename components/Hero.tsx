export default function Hero() {
  return (
    <div className="hero">
      <h1>Edinburgh Indie Gamers</h1>
      <svg viewBox="0 0 187 45" xmlns="http://www.w3.org/2000/svg">
        <text x="11%" y="45%" className="hero__title">Edinburgh</text>
        <text y="95%" className="hero__title">Indie Gamers</text>
      </svg>
      <img className="cupid-banner__background" src="../images/eig-banner-angels-compressed.svg" alt="Two cupids hold aloft a banner with the tagline" />
      <svg className="cupid-banner__banner" viewBox="0 0 500 60" xmlns="http://www.w3.org/2000/svg">
        <path id="banner-path" fill="none" stroke="none" d="M0,50 Q 225,70 500,-10" />
        <text className="cupid-banner__text">
          <textPath href="#banner-path">
            Story Games | Small Press | Indie RPGs | PbtA
          </textPath>
        </text>
      </svg>
    </div>
  )
}

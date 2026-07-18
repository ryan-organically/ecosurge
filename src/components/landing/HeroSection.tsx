'use client';

export default function HeroSection() {
  return (
    <div className="landing-section section-hero">
      <div className="video-section">
        <video
          id="bgVideo"
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          src="/assets/Concept video 1.mov"
        />
        <div className="video-overlay" />
        <section className="hero" id="home">
          <div className="hero-content">
            <h1 id="heroTitle">Ecosurge</h1>
          </div>
          <div className="hero-subheading">
            <p className="tagline">
              Engineering the overlap between civilization and the living world.
            </p>
            <a className="hero-cta" href="#mission">
              Scroll to explore &darr;
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

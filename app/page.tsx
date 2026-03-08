export default function Home() {
  return (
    <main className="screen">
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      <section className="card">
        <p className="eyebrow">LIVE DASHBOARD</p>
        <h1 className="title">FRANCHAISЕ DASHBOARD</h1>
        <p className="subtitle">
          Site is live. Mini PC connection test page.
        </p>

        <div className="stats">
          <div className="stat">
            <span className="label">Status</span>
            <strong className="value">Online</strong>
          </div>

          <div className="stat">
            <span className="label">Mode</span>
            <strong className="value">Fullscreen Ready</strong>
          </div>

          <div className="stat">
            <span className="label">Screen</span>
            <strong className="value">16:9 Test</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
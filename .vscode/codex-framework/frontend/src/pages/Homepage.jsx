import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './homepage.css';

export default function Homepage() {
  return (
    <div className="codex-homepage">
      <div className="top-grid">
        <section className="panel panel-left">
          <header className="panel-header">
            <span className="icon">⏳</span>
            <h2>Capsule replays</h2>
          </header>
          <video
            className="capsule-player"
            controls
            src={process.env.REACT_APP_CAPSULE_URL || "/media/capsule.mp4"}
            poster="/media/capsule-poster.jpg"
          />
          <div className="capsule-meta">
            <span className="meta-item"><strong>Title:</strong> Operational Success Capsule</span>
            <span className="meta-item"><strong>Duration:</strong> 15:00</span>
            <span className="meta-item"><strong>Lineage:</strong> Vanguard → Pilot → Remix v2</span>
          </div>
        </section>

        <section className="panel panel-right">
          <header className="panel-header">
            <span className="icon">📊</span>
            <h2>Power BI dashboard</h2>
          </header>
          <PowerBIEmbed
            embedConfig={{
              type: "report",
              id: process.env.REACT_APP_POWERBI_REPORT_ID,
              embedUrl: process.env.REACT_APP_POWERBI_EMBED_URL,
              accessToken: process.env.REACT_APP_POWERBI_ACCESS_TOKEN,
              tokenType: models.TokenType.Embed,
              settings: {
                panes: { filters: { visible: false } },
                navContentPaneEnabled: false,
              },
            }}
            eventHandlers={
              new Map([
                ["loaded", () => console.log("Power BI loaded")],
                ["rendered", () => console.log("Power BI rendered")],
                ["error", (evt) => console.error(evt.detail)],
              ])
            }
            cssClassName="powerbi-frame"
            getEmbeddedComponent={(comp) => (window).powerBiReport = comp}
          />
        </section>
      </div>

      <div className="middle-grid">
        <section className="panel panel-center">
          <header className="panel-header">
            <span className="icon">⚙️</span>
            <h2>CI/CD pipeline</h2>
          </header>
          <div className="pipeline-steps">
            <div className="step"><strong>Commit:</strong> main</div>
            <div className="step"><strong>Build:</strong> React + FastAPI</div>
            <div className="step"><strong>Provision:</strong> Terraform</div>
            <div className="step"><strong>Deploy:</strong> Azure App Service + Static Web Apps</div>
            <div className="step"><strong>Observe:</strong> App Insights + Grafana</div>
          </div>
        </section>

        <section className="panel panel-center">
          <header className="panel-header">
            <span className="icon">🧬</span>
            <h2>Remix lineage viewer</h2>
          </header>
          <div className="lineage-list">
            <div className="lineage-item">
              <strong>Capsule R-001</strong> — Vanguard → Civic Pilot → Diaspora Remix
            </div>
            <div className="lineage-item">
              <strong>Capsule R-002</strong> — Alpha Sprint → Funding Round → Partner Integration
            </div>
          </div>
        </section>
      </div>

      <div className="bottom-grid">
        <section className="panel panel-wide">
          <header className="panel-header">
            <span className="icon">📜</span>
            <h2>Recognition scrolls</h2>
          </header>
          <ul className="recognition-list">
            <li><strong>Custodian:</strong> Jermaine A.</li>
            <li><strong>Custodian:</strong> Esther M.</li>
            <li><strong>Custodian:</strong> Tamar E.</li>
          </ul>
        </section>

        <section className="panel panel-wide">
          <header className="panel-header">
            <span className="icon">🎙️</span>
            <h2>Legacy Echo narration</h2>
          </header>
          <audio
            className="echo-player"
            controls
            src={process.env.REACT_APP_ECHO_AUDIO_URL || "/media/echo-001.mp3"}
          />
          <div className="echo-meta">
            <span className="meta-item"><strong>Cut:</strong> #001 — The Operational Memory Black Hole</span>
            <span className="meta-item"><strong>Narrator:</strong> Codex Voice</span>
            <span className="meta-item"><strong>Runtime:</strong> 03:12</span>
          </div>
        </section>
      </div>
    </div>
  );
}

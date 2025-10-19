import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const PowerBIReport = ({ embedUrl, embedToken, reportId }) => {
  const embedConfig = {
    type: 'report',               // 'report' | 'dashboard' | 'tile' | 'visual' | 'qna'
    id: reportId,
    embedUrl,
    accessToken: embedToken,      // short-lived embed token from your backend
    tokenType: models.TokenType.Embed,
    settings: {
      panes: { filters: { visible: false } },
      background: models.BackgroundType.Transparent
    }
  };

  const eventHandlers = new Map([
    ['loaded', () => console.log('Power BI report loaded')],
    ['rendered', () => console.log('Power BI report rendered')],
    ['error', (event) => console.error('PowerBI error', event)]
  ]);

  return (
    <div style={{ height: '800px' }}>
      <PowerBIEmbed
        embedConfig={embedConfig}
        eventHandlers={eventHandlers}
        cssClassName={'powerbi-container'}
        getEmbeddedComponent={(embeddedReport) => {
          // Save reference if you need to call APIs (export, navigate, update filters)
          window.powerbiReport = embeddedReport;
        }}
      />
    </div>
  );
};

export default PowerBIReport;

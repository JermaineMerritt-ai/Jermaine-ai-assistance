import React from 'react';
import PowerBIReport from '../components/PowerBIReport';

const PowerBIExample = () => {
  const embedUrl = process.env.REACT_APP_PBI_EMBED_URL || '<Embed Url>';
  const reportId = process.env.REACT_APP_PBI_REPORT_ID || '<Report Id>';
  const embedToken = '<Access Token>'; // Replace by fetching from backend

  return (
    <div>
      <h2>Power BI Example</h2>
      <PowerBIReport embedUrl={embedUrl} embedToken={embedToken} reportId={reportId} />
    </div>
  );
};

export default PowerBIExample;
import React from 'react';
import PowerBIReport from '../components/PowerBIReport';

const PowerBIExample = () => {
  const embedUrl = process.env.REACT_APP_PBI_EMBED_URL || '<Embed Url>';
  const reportId = process.env.REACT_APP_PBI_REPORT_ID || '<Report Id>';
  const embedToken = '<Access Token>'; // Replace by fetching from backend

  return (
    <div>
      <h2>Power BI Example</h2>
      <PowerBIReport embedUrl={embedUrl} embedToken={embedToken} reportId={reportId} />
    </div>
  );
};

export default PowerBIExample;

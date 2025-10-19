PowerBIReport React component

Usage:

import PowerBIReport from './components/PowerBIReport';

<PowerBIReport embedUrl={process.env.REACT_APP_PBI_EMBED_URL} embedToken={token} reportId={process.env.REACT_APP_PBI_REPORT_ID} />

Notes:
- Provide the embed token from your backend.
- Ensure env variables for report ID and embed URL are set for build/dev.

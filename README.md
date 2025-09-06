# Jermaine Action AI Assistant (Azure Edition)

Production-ready starter to run an **action-taking AI assistant** on **Azure**.
- FastAPI backend (Azure App Service or Container Apps).
- Azure OpenAI for reasoning.
- Azure Key Vault integration (with `.env` fallback for local dev).
- Tool system: GitHub PRs (stub), YouTube upload (stub), Calendar event (stub).
- CI/CD via GitHub Actions to Azure Web App.
- Optional: `az` provisioning scripts in `infra/`.

## Quickstart (Local)
1) Python 3.11+
2) Copy `.env.example` to `.env` and fill placeholders (can be empty for now).
3) `pip install -r requirements.txt`
4) `uvicorn app.main:app --reload`

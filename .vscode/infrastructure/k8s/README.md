Kubernetes Manifests for Codex

Files:
- deployment.yaml — Deployment and Service for codex-api
- k8s-secret-example.yaml — Example secret manifest for DATABASE_URL

Apply to AKS:
1. Configure kubectl and point to your AKS cluster:
   az aks get-credentials -g <resource-group> -n <cluster-name>
2. Create secret (replace with secure values):
   kubectl apply -f k8s-secret-example.yaml
3. Deploy the app:
   kubectl apply -f deployment.yaml

Notes:
- Replace the image `jermaine/codex-api:latest` with your registry image and tag.
- For production, use managed identities or Key Vault for secrets.

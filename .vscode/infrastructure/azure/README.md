Azure Terraform module for Codex infra

Files:
- main.tf: Resource definitions (Resource Group, App Service Plan, App Service, PostgreSQL Flexible Server)
- variables.tf: Parameter definitions
- example.tfvars: Example variables file (do NOT commit secrets)

Quickstart
1. Set up Azure CLI and authenticate: `az login`
2. Initialize Terraform:
   terraform init
3. Create or edit a copy of `example.tfvars` to provide sensitive values (like db_admin_password)
4. Plan and apply:
   terraform plan -var-file=example.tfvars
   terraform apply -var-file=example.tfvars

Security
- Never commit real passwords. Use Key Vault, environment variables, or CI secrets.

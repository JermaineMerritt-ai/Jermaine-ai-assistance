resource_group_name = "codex-rg"
location            = "East US"
name_prefix         = "codex"
db_admin_user       = "codexadmin"
# Set this in a secure file or via environment / CI secrets
db_admin_password   = "REPLACE_WITH_SECURE_PASSWORD"
db_storage_mb       = 32768
db_version          = "13"

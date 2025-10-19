provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "codex" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_app_service_plan" "codex_plan" {
  name                = "${var.name_prefix}-plan"
  location            = azurerm_resource_group.codex.location
  resource_group_name = azurerm_resource_group.codex.name
  sku {
    tier = var.app_service_tier
    size = var.app_service_size
  }
}

resource "azurerm_app_service" "codex_api" {
  name                = "${var.name_prefix}-api"
  location            = azurerm_resource_group.codex.location
  resource_group_name = azurerm_resource_group.codex.name
  app_service_plan_id = azurerm_app_service_plan.codex_plan.id

  site_config {
    always_on = true
  }

  app_settings = {
    "DATABASE_URL" = azurerm_postgresql_flexible_server.codex.fqdn
  }
}

resource "azurerm_postgresql_flexible_server" "codex" {
  name                = "${var.name_prefix}-postgres"
  location            = azurerm_resource_group.codex.location
  resource_group_name = azurerm_resource_group.codex.name
  administrator_login = var.db_admin_user
  administrator_password = var.db_admin_password
  sku_name = var.db_sku_name
  storage_mb = var.db_storage_mb
  version   = var.db_version
}

output "resource_group_name" {
  value = azurerm_resource_group.codex.name
}

output "app_service_default_site_hostname" {
  value = azurerm_app_service.codex_api.default_site_hostname
}

output "postgres_fqdn" {
  value = azurerm_postgresql_flexible_server.codex.fqdn
}

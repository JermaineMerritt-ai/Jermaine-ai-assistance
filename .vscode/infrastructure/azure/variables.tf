variable "location" {
  type    = string
  default = "East US"
}

variable "resource_group_name" {
  type    = string
  default = "codex-rg"
}

variable "name_prefix" {
  type    = string
  default = "codex"
}

variable "app_service_tier" {
  type    = string
  default = "Standard"
}

variable "app_service_size" {
  type    = string
  default = "S1"
}

variable "db_admin_user" {
  type    = string
  default = "codexadmin"
}

variable "db_admin_password" {
  type    = string
  description = "Set as sensitive using tfvars or environment variable"
}

variable "db_sku_name" {
  type    = string
  default = "B_Standard_B1ms"
}

variable "db_storage_mb" {
  type    = number
  default = 32768
}

variable "db_version" {
  type    = string
  default = "13"
}

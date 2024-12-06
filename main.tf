

resource "azurerm_resource_group" "rg" {
    location = var.location
    name = var.app_name
}

resource "azurerm_storage_account" "storage" {
    name = var.storage_account_name 
    resource_group_name = azurerm_resource_group.rg.name
    location = var.location
    account_tier = "Stardard"
    account_replication_type = "LRS"

}

resource "azurerm_storage_container" "container" {
    name = var.container_name 
    storage_account_name = azurerm_storage_account.storage.name 
    container_access_type = "blob"
}

resource "azurerm_static_site" "react_app" {
    name = var.app_name
    resource_group_name = azurerm_resource_group.rg.name
    location = var.location 
}

output "react_app_url" {
    value = azurerm_static_site.react_app.default_hostname
}

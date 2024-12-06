output "resource_group_name" {
    value = azurerm_resource_group.rg.name
}

output "location" {
    value = azurerm_resource_group.rg.location
}

output "static_site_url" {
    value = azurerm_static_site.react_app.default_hostname
}
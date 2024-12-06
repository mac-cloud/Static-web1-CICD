variable "location" {
    type = string
    default = "South Africa North" 
    description = "Location of the resource group"
}

variable "app_name" {
    type = string
    default = "react-project-rg"
    description = "Prefix of the resource group name that's combined with random ID so name us unique in your Azure subscription."
}
variable "app-name" {
    type = string
    description = "Name of the Azure App Service"
    default = "reactfrontedapp"

}

variable "storage_account_name" {
    type = string
    description = "Name of the Storage account"
    default = "reactfrontedstorage"
}

variable "container_name" {
    type =  string
    description = "The name of storage container"
    default = "web"
}
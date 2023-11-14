# Terraform para ENFASIS: DEVOPS ultima entrega

# Azure Provider y version
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

# Configurar el Microsoft Azure Provider
provider "azurerm" {
  skip_provider_registration = true
  features {}
}

# Grupo de recursos para que todo quede relacionado a este
resource "azurerm_resource_group" "last_devops-rg" {
  name     = "last_devops_group"
  location = "westus"
  tags = {
    environment = "dev"
  }
}

# Red Virtual
resource "azurerm_virtual_network" "last_devops-vn" {
  name                = "last_devops-network"
  resource_group_name = azurerm_resource_group.last_devops-rg.name
  location            = azurerm_resource_group.last_devops-rg.location
  address_space       = ["10.0.0.0/16"]
  tags = {
    environment = "dev"
  }
}

# Subred 
resource "azurerm_subnet" "last_devops-subnet" {
  name                 = "last_devops-subnet"
  resource_group_name  = azurerm_resource_group.last_devops-rg.name
  virtual_network_name = azurerm_virtual_network.last_devops-vn.name
  address_prefixes     = ["10.0.2.0/24"]
}

# IP Publica
resource "azurerm_public_ip" "last_devops-ip" {
  name                = "last_devops-ip"
  resource_group_name = azurerm_resource_group.last_devops-rg.name
  location            = azurerm_resource_group.last_devops-rg.location
  allocation_method   = "Dynamic"

  tags = {
    environment = "dev"
  }
}

# Interfaz de red y configuracion de la IP
resource "azurerm_network_interface" "last_devops-nic" {
  name                = "last_devops-nic"
  location            = azurerm_resource_group.last_devops-rg.location
  resource_group_name = azurerm_resource_group.last_devops-rg.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.last_devops-subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.last_devops-ip.id
  }

  tags = {
    environment = "dev"
  }
}

# Creacion de la maquina virtual ubuntu
resource "azurerm_linux_virtual_machine" "last_devops-vm" {
  name                = "lastdevops-machine"
  resource_group_name = azurerm_resource_group.last_devops-rg.name
  location            = azurerm_resource_group.last_devops-rg.location
  size                = "Standard_B1s"
  admin_username      = "azureuser"
  network_interface_ids = [
    azurerm_network_interface.last_devops-nic.id,
  ]

  admin_password                  = "j85dEzfXNCxVyB"
  disable_password_authentication = false

  custom_data = filebase64("customdata.tpl")

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-focal"
    sku       = "20_04-lts"
    version   = "latest"
  }
}

output "vm_public_ip" {
  value = azurerm_linux_virtual_machine.last_devops-vm.public_ip_address
}
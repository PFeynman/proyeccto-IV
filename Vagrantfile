# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Documentación de vagrant-digitalocean: https://github.com/devopsgroup-io/vagrant-digitalocean

  config.vm.define "leaguestatic-droplet" do |config|
    config.vm.provider :digital_ocean do |provider, override|
      # Path de la clave privada SSH
      override.ssh.private_key_path = '~/.ssh/id_rsa'
      # Definir la "box" para crear la VM en Digital Ocean
      override.vm.box = "digital_ocean"
      override.vm.box_url = "https://github.com/smdahlen/vagrant-digitalocean/raw/master/box/digital_ocean.box"
      provider.token = ENV['DIGITAL_OCEAN_TOKEN']
      provider.image = "ubuntu-18-04-x64"
      provider.region = "ams3"
    end
  end

  config.vm.provision 'chef_solo' do |chef|
    chef.add_recipe "essential"
  end

end

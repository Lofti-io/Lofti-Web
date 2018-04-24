# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"
  config.vm.synced_folder ".", "/home/vagrant/Lofti"
  config.vm.network :forwarded_port, guest: 3000, host: 3000, auto_correct: true
  config.vm.network :forwarded_port, guest: 8000, host: 8000, auto_correct: true
 config.ssh.forward_agent = true
  config.vm.provider :virtualbox do |v|
    v.memory = 1024
    v.linked_clone = true
  end

  config.vm.define "lofti" do |app|
    app.vm.hostname = "lofti"
		app.vm.network :private_network, ip: "192.168.60.4"
  end
  config.vm.provision "shell", inline: <<-SHELL
    apt-get install -y python
  SHELL
  config.vm.provision "ansible" do |ansible|
    ansible.become = true
    ansible.playbook = "conf/main.yml"
  end
end


VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "ubuntu/trusty64"

    # Forward ports to Apache and MySQL
    #config.vm.network "forwarded_port", guest: 80, host: 3006
    config.vm.network "forwarded_port", guest: 3306, host: 9005
    config.vm.network "forwarded_port", guest: 9000, host: 9000
    config.vm.network "forwarded_port", guest: 3006, host: 3007
  config.vm.provision "shell", path: "provision.sh"

   config.vm.provider "virtualbox" do |vb|
  #   # Don't boot with headless mode
  #   vb.gui = true
  #
  #   # Use VBoxManage to customize the VM. For example to change memory:
  vb.customize ["modifyvm", :id, "--memory", "4096"]
   end
end
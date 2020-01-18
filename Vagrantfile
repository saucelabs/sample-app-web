Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/bionic64"

  # first boot is so slow when running inside a VM (i.e. vm-in-vm a la Inception)
  config.vm.boot_timeout = 1800

  config.vm.synced_folder "./", "/usr/local/saucelabs/sample-app-web"

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    # vb.gui = true

    # Customize the amount of memory on the VM:
    vb.memory = "1024"
  end

  # Wire up the application's one-time setup
  config.vm.provision "shell", inline: "/bin/sh -c 'cd /usr/local/saucelabs/sample-app-web; ./setup-app.sh'"
end


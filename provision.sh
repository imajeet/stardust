#!/bin/bash
main(){
    prepare_node 
    initiate_project
}

prepare_node(){
    echo "Preparing node & packages..."
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - >/dev/null
    sudo apt-get install -y nodejs >/dev/null 2>&1
    cd /vagrant
    sudo npm install forever -g >/dev/null 2>&1
    sudo npm install >/dev/null 2>&1

}
initiate_project(){
    #starts everything up
   cd /vagrant
   forever stopall >/dev/null 2>&1
   sudo killall node >/dev/null 2>&1

   cd client
   echo "Installing client stuff"
   sudo npm i

   echo "Sass bindings..."
   sudo npm rebuild node-sass --force >/dev/null 2>&1
   sudo rm -rf build
   echo "Starting build... VERBOSELY"
   sudo npm run build
   echo "Build finished"

   #node server 
   cd ..
   sudo forever start -c 'node server' ./ 
   if pgrep -x "node" > /dev/null
   then
      echo "Server started -> http://localhost:9000"
   else 
      echo "Server failed"
  fi
}
main
exit 0
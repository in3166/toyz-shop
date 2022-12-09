#!/bin/bash

cd /home/ubuntu/github_action #본인의 EC2 폴더 구조에 따라 변경
pid=$(sudo lsof -ti:3400)
if [ -n "$pid" ]; then 
sudo kill -9 $pid
echo "kill ${pid} process" 
npm start
else
npm start
fi
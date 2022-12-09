#!/bin/bash
cd /home/ubuntu/github_action
npm install
pm2 start 'npm deploy:prod' --name "toyz_app"
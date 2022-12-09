#!/bin/bash
cd /home/ubuntu/github_action
pm2 kill
npm install --legacy-peer-deps
pm2 start 'npm run deploy:prod' --name "toyz_app"
#!/bin/bash
cd /home/ubuntu/github_action
pm2 kill
npm install --legacy-peer-deps
pm2 start 'npm run start' --name "toyz_app"
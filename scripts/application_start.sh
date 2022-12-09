#!/bin/bash
cd /home/ubuntu/github_action/app-frontend
npm run build
pm2 start npm --name "toyz_shop" -- start
pm2 startup
pm2 save
pm2 restart all
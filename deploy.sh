#!/bin/bash

cd /home/ubuntu/github_action
# install dependencies
$ npm install 

# build 
$ npm run build

# stop running process, example: ps -ef | grep ec2-user/next.js | grep -v grep |awk '{print $2}'| xargs kill -9
$ ps -ef | grep <app directory> | grep -v grep | awk '{print $2}'| xargs kill -9

# start app as a daemon process 
$ (npm run start > /dev/null 2>&1 &)

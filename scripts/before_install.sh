#!/bin/bash
cd /home/ubuntu/github_action/server
curl -sL https://rpm.nodesource.com/setup_19.x | sudo -E bash -
yum -y install nodejs npm
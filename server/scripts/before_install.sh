#!/bin/bash
cd /home/ubuntu/github_action
curl -sL https://rpm.nodesource.com/setup_19.x | sudo -E bash -
yum -y install nodejs npm
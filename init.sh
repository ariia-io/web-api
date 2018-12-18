#!/bin/bash
#
echo "Starting SSH ..."
#/etc/init.d/sshd start
#
echo "Starting Ariia api server..."
exec node ./dist/server.js
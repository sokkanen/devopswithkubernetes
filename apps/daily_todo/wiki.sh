#!/bin/bash
set -e

HOST="$1"
URL=$(curl https://en.wikipedia.org/wiki/Special:Random -si \
	|grep 'location: '\
	| awk '{print $2}')

URL="${URL%%[[:cntrl:]]}"

curl \
-H "Content-Type: application/json" \
-X POST \
--data '{"todo":"Read '"$URL"'"}' http://${HOST}/api/todos

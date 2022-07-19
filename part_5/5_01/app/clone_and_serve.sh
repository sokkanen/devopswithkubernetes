#!/bin/sh

URL=$1

# Fetches and stores the resource found from the URL parameter
get_resource() {
	RESOURCE=$(curl $1)
	echo $RESOURCE > index.html
}

# Serves the stored resource in port passed as a second parameter.
serve_html() {
	http-server "$1"
#done
}

# main
if [ -z "$URL" ]; then
	printf "URL parameter is missing.\nUsage: ./clone_and_serve.sh <URL>\n"
	exit 1
else
	get_resource $URL
	serve_html
fi

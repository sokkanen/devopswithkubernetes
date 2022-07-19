FROM alpine:latest
COPY ./clone_and_serve.sh /
RUN apk add --update curl bash npm
RUN npm install -g http-server
EXPOSE 8080
ENTRYPOINT [ "/clone_and_serve.sh" ]
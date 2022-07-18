FROM alpine:latest
COPY ./clone_and_serve.sh /
RUN apk add --update curl bash
EXPOSE 8080
ENTRYPOINT [ "/clone_and_serve.sh" ]
FROM alpine:latest
WORKDIR /app
COPY ./index.js .
COPY ./package.json .
RUN apk add --update nodejs npm bash
RUN npm i
CMD npm run start
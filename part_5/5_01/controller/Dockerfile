FROM alpine:latest
COPY ./src ./src
COPY ./package.json .
RUN apk add --update nodejs npm bash
RUN npm i
CMD npm run start
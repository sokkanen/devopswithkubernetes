FROM alpine:latest
WORKDIR /app/pingpong
COPY ./src ./src
COPY ./package.json .
RUN apk add --update nodejs npm bash
RUN npm i
EXPOSE 3010
CMD npm run start
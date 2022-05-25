FROM alpine:latest
WORKDIR /app
COPY ./src ./src
COPY ./package.json .
RUN apk add --update nodejs npm bash
RUN npm i
EXPOSE 3000
CMD npm run start
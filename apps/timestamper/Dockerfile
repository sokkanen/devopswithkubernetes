FROM alpine:latest
WORKDIR /app/timestamper
COPY ./src ./src
COPY ./package.json .
RUN apk add --update nodejs npm bash
RUN npm i
EXPOSE 8080
CMD npm run start
FROM alpine:latest
WORKDIR /app/timestamper
COPY ./src ./src
COPY ./package.json .
RUN apk add --update nodejs npm bash
RUN npm i
EXPOSE 3020
CMD npm run start
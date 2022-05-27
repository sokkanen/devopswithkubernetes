FROM alpine:latest
WORKDIR /app/todoapp
COPY ./src ./src
COPY ./public ./public
COPY package.json .
ENV PORT 8080
EXPOSE 8080
RUN apk add --update nodejs npm bash
RUN npm i
CMD npm run start
FROM alpine:latest as ui-build
WORKDIR /app/todofront
COPY ./src ./src
COPY ./public ./public
COPY ./package.json ./package-lock.json ./
RUN apk add --update nodejs npm bash
RUN npm i
RUN npm run build

FROM alpine:latest
WORKDIR /app
COPY --from=ui-build /app/todofront/bff/build ./build
COPY ./bff/index.js ./bff/package-lock.json ./bff/package.json ./
RUN apk add --update nodejs npm bash
RUN npm i
EXPOSE 8090
ENV PROXY_URL=todo-backend
ENV PROXY_PORT=80
CMD npm run start
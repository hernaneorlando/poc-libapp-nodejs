FROM node:20.11.0-slim
WORKDIR /src

COPY ./backend/ ./
RUN npm install

RUN apt-get update && apt-get install -y curl
CMD node main.js
EXPOSE 3000
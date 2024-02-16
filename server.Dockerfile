FROM node:20.11.0-slim
WORKDIR /src

COPY ./server/ ./
RUN npm install

EXPOSE 3000
RUN apt-get update && apt-get install -y curl
CMD node main.js
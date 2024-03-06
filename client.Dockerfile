FROM node:20.11.0-slim
WORKDIR /src

COPY ./frontend/ ./
RUN npm install -g @angular/cli
RUN npm ci && npm run build

RUN apt-get update && apt-get install -y curl
CMD npm run serve:ssr:library
EXPOSE 80
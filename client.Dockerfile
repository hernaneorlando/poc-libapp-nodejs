FROM node:20.11.0-slim
WORKDIR /src

COPY ./client/ ./
RUN npm install -g @angular/cli
RUN npm ci && npm run build

EXPOSE 80
RUN apt-get update && apt-get install -y curl
CMD npm run serve:ssr:library
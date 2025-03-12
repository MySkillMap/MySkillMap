FROM node:latest

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server/. .

EXPOSE 8080

CMD ["npm", "start"]


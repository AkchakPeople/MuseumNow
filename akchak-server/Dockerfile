FROM node:12.19.0-alpine3.9

WORKDIR /app/akchak-server

COPY ./akchak-server/package*.json ./

RUN npm install

EXPOSE 5000

COPY . .

CMD ["npm", "run", "start:dev"]

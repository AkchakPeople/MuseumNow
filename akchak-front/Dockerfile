FROM node:10

WORKDIR /app/akchak-front

COPY ./akchak-front/package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
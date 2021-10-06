FROM node:12.19.0-alpine3.9

WORKDIR /app/akchak-front

COPY ./akchak-front/package*.json ./

COPY . .

# RUN npm install 
RUN npm i react-scripts
RUN npm install 

EXPOSE 3000

CMD ["npm","run", "start"]
FROM node:18

WORKDIR /app

RUN npm config set strict-ssl=false

COPY package*.json /app/

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT npm start






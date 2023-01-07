FROM node

WORKDIR /app

RUN npm config set strict-ssl=false

COPY package*.json /app/

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT npm start



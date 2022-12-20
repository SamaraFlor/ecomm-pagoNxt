FROM node

WORKDIR /app

RUN npm config set strict-ssl=false

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT npm start
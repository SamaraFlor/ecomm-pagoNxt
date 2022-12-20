FROM node

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
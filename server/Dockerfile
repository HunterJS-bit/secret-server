FROM node:12.2.0-alpine 

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --silent

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]
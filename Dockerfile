FROM node:14-alpine

RUN apk update

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY tslint.json ./

COPY src /app/src
COPY views /app/views

RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "./dist/app.js"]
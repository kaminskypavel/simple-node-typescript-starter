FROM node:alpine

WORKDIR /home
COPY package.json package-lock.jsn /home/
RUN npm i
COPY . /home

CMD npm start

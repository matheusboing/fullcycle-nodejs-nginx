FROM node:14
WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

RUN npm install express
RUN npm install mysql

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

COPY ./ /usr/src/app/

EXPOSE 3000

CMD [ "node", "index.js" ]
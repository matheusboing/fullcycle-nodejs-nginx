FROM node:14
WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app/
RUN npm install express
RUN npm install mysql
COPY ./ /usr/src/app/
EXPOSE 3000
CMD [ "node", "index.js" ]
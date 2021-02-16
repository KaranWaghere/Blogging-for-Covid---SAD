FROM node

WORKDIR /Frontend

COPY package*.json /Frontend/
RUN npm install

COPY . /Frontend/

EXPOSE 3000
CMD [ "npm", "start"]
FROM node:10.19.0
COPY . /CT-proxy
WORKDIR /CT-proxy
RUN npm install
CMD npm start
EXPOSE 3000
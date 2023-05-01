FROM node:16.14

WORKDIR /

COPY package*.json .

RUN npm install 

COPY . .

CMD ["run", "dev"]
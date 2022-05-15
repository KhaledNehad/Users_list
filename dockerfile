FROM node:17-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 3001

COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent

COPY . ./

CMD ["npm", "run", "dev"]
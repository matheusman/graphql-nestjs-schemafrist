FROM node

WORKDIR /home/app

COPY package* .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start:dev"]
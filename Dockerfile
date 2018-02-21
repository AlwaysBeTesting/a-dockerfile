FROM node:8.9-alpine
LABEL maintainer "nicholas.cariss@t-systems.com"

WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

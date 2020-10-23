FROM node:12-alpine

WORKDIR /app

COPY ./server .

RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]

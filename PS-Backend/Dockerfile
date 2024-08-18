FROM node:18-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ENV NODE_ENV production
RUN npm run build
RUN npm install pm2@5.2.0 -g
EXPOSE 8000

CMD ["pm2-runtime", "npm", "--", "run", "start:prod"]

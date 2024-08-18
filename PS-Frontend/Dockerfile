# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package*.json ./
RUN npm i;

COPY . .

# Build the UI
RUN npm run build
ENV HOSTNAME "0.0.0.0"

EXPOSE 3000
CMD ["npm", "run", "start"]

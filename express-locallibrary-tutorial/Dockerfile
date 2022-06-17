FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
ENV MONGODB_URL=mongodb://localhost:27017/local
CMD ["npm", "start"]
EXPOSE 3000
ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /app   
COPY . .
RUN npm install  
RUN npm run build  
EXPOSE 3000 
CMD npm run start


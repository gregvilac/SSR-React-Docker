FROM --platform=linux/amd64 node:20-alpine as client
USER node
WORKDIR /usr/app
COPY --chown=node:node  ./package*.json ./
RUN npm install
COPY  . .
RUN npm run build
RUN npm run build:server

FROM --platform=linux/amd64 node:20-alpine as server
USER node
WORKDIR /usr/app
RUN echo **/node_modules/ > .dockerignore
COPY  ./server/package*.json ./
RUN npm ci --only=production
COPY  ./server/server.js ./
COPY --from=client /usr/app/dist/assets ./dist/assets 
COPY --from=client /usr/app/dist/index.html ./dist/assets 
COPY --from=client /usr/app/dist/render ./dist/render 
EXPOSE 8080

CMD [ "node", "server.js" ]

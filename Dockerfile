FROM node:14-alpine as build

WORKDIR /app

COPY ./Frontend/package*.json ./

RUN npm install

COPY Frontend/ .

RUN ls -l /app/public

RUN npm install -g react-scripts

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

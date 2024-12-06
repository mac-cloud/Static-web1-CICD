FROM node:14-alpine as build

WORKDIR /app

RUN echo '{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "build": "react-scripts build",
    "start": "react-scripts start",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {},
  "devDependencies": {}
}' > package.json

RUN npm install

COPY frontend/ .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM node:14-alpine as build

WORKDIR /app

RUN printf '{\n  "name": "my-app",\n  "version": "1.0.0",\n  "scripts": {\n    "build": "react-scripts build",\n    "start": "react-scripts start",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n  "dependencies": {\n "react-scripts": "latest" },\n  "devDependencies": {}\n}' > package.json

RUN npm install

COPY . .

RUN ls -l /app/public

RUN npm install -g react-scripts

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

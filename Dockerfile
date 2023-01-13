# ? docker file html

FROM node:16.15.0 AS builder

# set working directory
WORKDIR /app

# เข้าไปใน package
COPY package.json ./

RUN npm install

#  COPY and npm run build
COPY . ./
RUN npm run build

#  สร้างมาอีก nginx
FROM nginx:latest

# COPY . /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
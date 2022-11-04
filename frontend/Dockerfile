FROM node as build 
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . .
RUN yarn build

FROM nginx 
EXPOSE 3000
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
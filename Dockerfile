# Build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh entrypoint.sh
RUN chmod +x ./entrypoint.sh
CMD ["./entrypoint.sh"]
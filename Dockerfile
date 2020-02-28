FROM node:12.16.1-alpine as base

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/

FROM base as builder
RUN npm run build-storybook

FROM nginx:1.15.8-alpine as prod

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/storybook-static/ /usr/share/nginx/html
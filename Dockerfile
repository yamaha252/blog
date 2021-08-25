#Dev stage
FROM node:14-alpine as builder

WORKDIR /opt/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build --configuration=production


#Prod stage
FROM nginx:alpine

COPY docker/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /opt/app/dist/blog /usr/share/nginx/html

COPY docker/runtime.js /usr/share/nginx/html/assets/runtime.js.template

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

COPY docker/startup.sh /root/startup.sh
RUN chmod +x /root/startup.sh

WORKDIR /usr/share/nginx/html

LABEL name=blog-web-app project=blog category=web

CMD /root/startup.sh

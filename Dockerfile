FROM node:8-alpine as builder
RUN apk add --no-cache bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./

RUN yarn add typescript
RUN yarn
# Bundle app source
COPY . .

# Build Sources
RUN yarn run build

#ENV SSH_PASSWD "root:Docker!"
#RUN apk add --no-cache openssh \
#  && echo "$SSH_PASSWD" | chpasswd

FROM node:8-alpine
COPY ./config/sshd_config /etc/ssh/
COPY init.sh /usr/local/bin/

RUN chmod u+x /usr/local/bin/init.sh

# Copy build distribution files
WORKDIR /root/
COPY --from=builder /usr/src/app .

EXPOSE 3000 2222
#CMD [ "node", "./dist/server.js" ]

ENTRYPOINT ["sh", "/usr/local/bin/init.sh"]

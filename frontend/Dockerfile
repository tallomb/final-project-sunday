FROM node:latest
WORKDIR /app
RUN yarn install
COPY package.json yarn.lock ./
COPY . .
ARG API_URL
ENV API_URL $API_URL
CMD ["yarn", "dev"]

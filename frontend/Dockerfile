FROM node:latest
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
WORKDIR /app
ARG API_URL
ENV API_URL $API_URL
CMD ["yarn", "dev"]

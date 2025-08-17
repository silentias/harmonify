FROM node:24-alpine3.21

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm build

CMD ["pnpm", "preview", "--port", "3000", "--host",  "0.0.0.0"]

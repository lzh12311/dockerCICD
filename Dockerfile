# 阶段 1：构建
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . ./
RUN pnpm build

CMD ["npm", "run" , "start"]

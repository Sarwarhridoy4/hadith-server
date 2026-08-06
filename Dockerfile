FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --production

COPY . .
RUN bun run build

FROM oven/bun:1-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

ENV NODE_ENV=production
EXPOSE 5000

CMD ["bun", "run", "dist/server.js"]

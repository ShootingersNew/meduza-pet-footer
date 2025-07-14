# ========== base stage ==========
FROM node:22 AS base
WORKDIR /app
COPY . .
RUN npm ci

# ========== dev ==========
FROM base AS dev
CMD ["npm", "run", "serve"]

# ========== test ==========
FROM base AS test
ENV NODE_ENV=test
RUN npm run build
CMD ["npm", "run", "test:unit"]

# ========== build ==========
FROM base AS build
RUN npm run build

# ========== prod ==========
FROM nginx:alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
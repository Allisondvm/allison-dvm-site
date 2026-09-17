# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:26-alpine AS build
WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable

# Fonts for build-time OG/social image rendering (sharp/librsvg need real fonts,
# otherwise glyphs render as tofu in CI even though local builds look fine).
RUN apk add --no-cache fontconfig ttf-dejavu && fc-cache -f

# Install deps (cached layer)
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Build the static site
COPY . .
RUN pnpm build

# ---- Runtime stage ----
FROM nginx:1.27-alpine AS runtime

# Serve on 8080 as an unprivileged user (uid 101 = nginx).
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

RUN chown -R 101:101 /usr/share/nginx/html /var/cache/nginx \
    && touch /run/nginx.pid && chown 101:101 /run/nginx.pid

USER 101
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]

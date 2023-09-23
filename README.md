# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## DOCKER

docker run -p 5432:5432 -e POSTGRES_PASSWORD=docker -d postgres

## Prisma

bunx install prisma -D

bunx prisma init --datasource-provider postgres

bunx prisma generate --schema=./src/external/prisma/schema.prisma

bunx prisma migrate dev --name create_users --schema=./src/external/prisma/schema.prisma

bunx prisma studio --schema=./src/external/prisma/schema.prisma

# Hadith Server

Modular Express + TypeScript API for hadith storage/search backed by MongoDB via Prisma.

## Features

- Random hadith endpoint
- List all hadiths
- Search by `hadith`, `narrator`, `source`, or `reference`
- Upload new hadith via API
- Modular architecture (config / controller / repository / validator / types)

## Tech stack

- Bun
- TypeScript
- Express
- Prisma (MongoDB)
- Vercel

## Prisma schema layout (split schema)

- [`prisma/schema/schema.prisma`](prisma/schema/schema.prisma)
- [`prisma/schema/hadith.prisma`](prisma/schema/hadith.prisma)
- [`prisma.config.ts`](prisma.config.ts)

## Setup

1. Install dependencies:

```bash
bun install
```

2. Add environment variable:

```env
MONGODB_URI="your-mongodb-uri"
```

3. Generate Prisma client:

```bash
bun run prisma:generate
```

4. Push schema to DB:

```bash
bun run prisma:push
```

5. Start server:

```bash
bun run dev
```

## API

Base path: `/api`

- `GET /api/all-hadith`
- `GET /api/random-hadith`
- `GET /api/search/:field/:query`
- `POST /api/upload-hadith`

### Upload payload example

```json
{
  "hadith": "Actions are judged by intentions.",
  "narrator": "Umar ibn Al-Khattab",
  "source": "Sahih Bukhari",
  "reference": "Bukhari 1"
}
```

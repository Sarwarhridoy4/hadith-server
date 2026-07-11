# Hadith Server

Modular Express + TypeScript API for hadith storage/search backed by MongoDB via Mongoose.

## Features

- Random hadith endpoint
- List all hadiths
- Search by `hadith`, `narrator`, `source`, or `reference`
- Upload new hadith via API
- Modular architecture (config / controller / repository / validator / types / model)

## Tech stack

- Bun
- TypeScript
- Express
- Mongoose (MongoDB)
- Vercel

## Setup

1. Install dependencies:

```bash
bun install
```

2. Add environment variable:

```env
MONGODB_URI="your-mongodb-uri"
```

3. Start server:

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

# Turborepo Full Stack Starter

For every new project, we waste hours doing the same things again:

- Creating a Turborepo
- Setting up PostgreSQL
- Configuring Prisma
- Adding authentication
- Connecting backend with frontend
- Fixing ESM issues
- Fixing TypeScript/JavaScript conflicts
- Fixing import/path issues
- Debugging configuration problems before writing actual features

So I created this starter template.

This template already includes:

- Turborepo setup
- PostgreSQL + Prisma configured
- Authentication setup
- Frontend integration completed

Now you can just:

1. Clone the repo
2. Add your environment variables
3. Start building your project

instead of wasting time fixing setup issues.

---

## Stack

- Turborepo
- PostgreSQL
- Prisma
- Authentication
- TypeScript

---

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Add environment variables

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

### Run database

```bash
pnpm db:push
```

### Start development server

```bash
pnpm dev
```

---

## Goal

The goal of this template is simple:

> Spend time building products, not fixing setup issues.
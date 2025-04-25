# Next.js and Dezaban Integeration Example

This is an example project for integrating [Dezhban](https://dezhban.io) with [Next.js](https://nextjs.org/).

## Getting Started

### 1. Clone the repository

### 2. Install dependencies
```bash
npm install
```

### 3. Add the environment variables
Add following environment variables to your `.env.local` file:
```
NEXT_AUTH_PUBLIC_APP_URL=http://localhost:3000
NEXT_AUTH_CLIENT_ID=client_id
NEXT_AUTH_CLIENT_SECRET=client_secret
NEXT_AUTH_SECRET=some_random_secret
NEXT_AUTH_URL=https://dezh.me/realms/realms/dezhban-nextjs
```
The `NEXT_AUTH_CLIENT_ID`, `NEXT_AUTH_CLIENT_SECRET`, and `NEXT_AUTH_URL` can be obtained form Dezban console once you've created an application.

The `NEXT_AUTH_SECRET` is random secret value that is used to encrypt session and transaction cookies. You can generate a secret using `openssl`:
```bash
openssl rand -hex 32
```

The `NEXT_AUTH_PUBLIC_APP_URL` is the URL that your application is running on. When developping locallu this is most commonly `https://localhost:3000`.

### 4. Running the Development Server
Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
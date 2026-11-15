# AIMS web app

Next.js 15 and Tailwind CSS 4. See the README in the project root for how to run it.

`npm run dev` starts it on http://localhost:3000. Set `API_URL` if the Laravel API is not on http://localhost:8000.
Set `NEXT_PUBLIC_BACKEND_URL` to the browser-accessible Laravel origin used for SSO (default: `http://127.0.0.1:8001`).
Configure Laravel's `SSO_REDIRECT_URI` as that origin plus `/sso/callback`, and set `FRONTEND_URL` to the web app.
The frontend and backend must use the same hostname for their URLs (ports can differ), or use a shared session-cookie domain.

---
name: testing-auth-flow
description: Test the InfiCoreWare auth UI (signup, login, verify-email, resend, forgot/reset password) end-to-end against the live backend. Use when verifying auth UI or toast changes in the InficoreTechnology (Nuxt) frontend.
---

# Testing the InfiCoreWare auth flow

Frontend: Nuxt 4 (`srcDir = app/`), `vue-toastification` for all auth feedback.
Backend: Express on Render (`https://infocorewarebackend.onrender.com`), routes mounted at both `/auth/*` and `/api/auth/*`.

## Run the frontend locally
- Requires **Node 22** (`nvm use 22.12.0`). Nuxt 4 toolchain needs native bindings (`@rolldown/binding-linux-x64-gnu`); if `npm install` fails on bindings, install on Node 22.
- Start: `NUXT_PUBLIC_API_BASE="https://infocorewarebackend.onrender.com/api" npm run dev` (serves http://localhost:3000).
- CORS on the backend allows `http://localhost:3000`, so the local UI can hit the live API directly.

## Critical gotcha: the backend is SLOW (~2 minutes per email op)
Signup, resend-verification, and forgot-password each block **~120–125 seconds** because the backend sends the Gmail email **synchronously** inside the request (measured via `curl -w %{time_total}` and browser `performance` resource timing). The request DOES succeed (HTTP 201/200) — just be patient. There is no loading spinner, so the UI looks frozen. Budget ~2.5 min per attempt and avoid firing concurrent backend requests (Render free tier is single-instance and queues them). This slowness might be fixed later if email is moved to async/queue.

## Fast paths that DON'T wait on email (use these to prove toasts render)
- `/verify-email?token=invalid` → backend rejects the token quickly → red error toast "Invalid or expired verification token". This is the fastest proof the toast plugin works.
- reset-password client-side mismatch would also be instant, BUT `app/pages/reset-password.vue` currently has **no `<template>`** (script-only), so the page renders no form. Verify whether a template has been added before relying on this path.

## Toast verification tips
- vue-toastification creates a **separate container element per position**. Toasts here render **top-right**. A `MutationObserver` on the first `.Vue-Toastification__container` (which may be the `top-left` one) will MISS them — observe all containers or just screenshot the top-right corner.
- Toasts default to a 3s timeout. To reliably screenshot a toast that appears after a 2-min backend wait, temporarily bump `timeout` in `app/plugins/toast.client.ts` (e.g. 3000→60000), then revert. Don't commit that change.
- Presence of `.Vue-Toastification__container` in the DOM proves the plugin is registered (the original bug was the plugin sitting in repo-root `plugins/` instead of `app/plugins/`, so it never loaded).

## Key assertions
- Signup (fresh email) → green toast "Account created! Please check your email…" AND form switches to the **Login** tab with password cleared (must NOT redirect to `/`).
- Login with an unverified account → inline red "Please verify your email before logging in." + yellow "Resend Verification Email" button.
- verify-email invalid token → red error toast.
- Users are created with `isVerified=false`; you can't complete login without the real email token, so use the DB or a verified account to test the post-verification login.

## Test data
- Signup with `+tag@example.com` emails (Gmail accepts, bounces later, backend swallows the bounce). Each run creates a real row in the Neon DB.

## Devin Secrets Needed
- None for read-only UI testing against the live backend. To modify DB state (e.g. flip `isVerified`) or test real email delivery you'd need the Neon `DATABASE_URL` and Gmail SMTP creds (`SMTP_USER`/`SMTP_PASS`) — not required for the UI flow above.

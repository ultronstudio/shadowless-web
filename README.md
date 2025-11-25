# Shadowless Crowdfunding Landing Page

Marketing site for the Shadowless crowdfunding campaign. The app is built with Next.js (App Router) and integrates Stripe in test mode for collecting pledges.

## Requirements

- Node.js 18.18+ (recommend `nvm use 18` or newer)
- npm 9+ (ships with the required Node version)
- Stripe account with test mode enabled
- Optional: Stripe CLI (`npm install -g stripe`) for local event inspection

## Setup

1. Install dependencies: `npm install`
2. Copy `.env.local.example` to `.env.local`
3. In the Stripe Dashboard go to Developers → API keys → Test keys and copy the test keys into `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY`
4. Run the dev server: `npm run dev`
5. Visit `http://localhost:3000` and open the crowdfunding modal to simulate a pledge

## Stripe Test Mode

- Keep the project in **test mode** by using keys that start with `pk_test_` and `sk_test_`
- When the modal opens, the form expects the Payment Element provided by Stripe
- Use the canonical card `4242 4242 4242 4242`, any future expiry, CVC 123, ZIP/Postal code 12345
- The `/api/create-payment-intent` route creates PaymentIntents on demand with automatic payment methods enabled
- Optional: run `stripe login` and `stripe listen --forward-to localhost:3000/api/webhooks` if you need to inspect events during development

## Available Scripts

- `npm run dev` – start Next.js in development mode
- `npm run build` – build the production bundle
- `npm run start` – serve the production build locally
- `npm run lint` – run ESLint over the project

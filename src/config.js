/**
 * config.js
 *
 * Loads and validates environment variables for all five data sources
 * (Google OAuth, GSC, GA4, AdSense, Ads API, Reddit). Fails loudly at
 * startup if a required variable is missing, rather than letting a
 * tool call fail later with a confusing API error.
 *
 * Connects to: src/index.js (called once at server startup)
 * Depends on: dotenv, .env file (see .env.example)
 */

// TODO: load process.env via dotenv, validate required keys are present,
// export a single config object consumed by auth/google-auth.js,
// auth/ads-auth.js, and auth/reddit-auth.js.

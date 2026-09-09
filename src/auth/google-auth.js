/**
 * google-auth.js
 *
 * Builds an authenticated Google OAuth2 client shared by GSC, GA4, and
 * AdSense, since all three APIs authenticate against the same Google
 * Cloud project and OAuth credentials.
 *
 * Connects to: src/tools/gsc.js, src/tools/ga4.js, src/tools/adsense.js
 * Depends on: src/config.js, googleapis
 */

// TODO: instantiate google.auth.OAuth2 using GOOGLE_CLIENT_ID,
// GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN from config.js.
// Export a function that returns a ready-to-use authenticated client.

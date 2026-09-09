/**
 * ads-auth.js
 *
 * Builds an authenticated Google Ads API client for Keyword Planner
 * queries. Separate from google-auth.js because the Ads API requires
 * its own developer token on top of standard OAuth, and uses a
 * different client library (google-ads-api) than GSC/GA4/AdSense.
 *
 * Connects to: src/tools/keyword-planner.js
 * Depends on: src/config.js, google-ads-api
 */

// TODO: instantiate the GoogleAdsApi client using
// GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CLIENT_ID,
// GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN, and
// GOOGLE_ADS_CUSTOMER_ID from config.js. Export a function that
// returns a ready-to-use customer instance.

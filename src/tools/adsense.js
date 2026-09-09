/**
 * adsense.js
 *
 * Exposes an MCP tool for querying AdSense performance data via the
 * AdSense Management API. Read-only, no mutation, no changes to ad
 * units, sites, or account settings.
 *
 * Default query covers the morning-check use case: earnings, page
 * views, impressions, and CTR by day for a given date range, so
 * highs/lows/anomalies are visible without a manual dashboard check.
 *
 * Connects to: src/index.js (registers this tool with the MCP server)
 * Depends on: src/auth/google-auth.js, googleapis (adsense v2)
 */

// TODO: define the tool schema (date range, dimensions, metrics) and
// the handler that calls accounts.reports.generate via the
// authenticated client from google-auth.js. Apply a default metric
// set (earnings, page views, impressions, ctr) when the caller
// doesn't specify custom ones.

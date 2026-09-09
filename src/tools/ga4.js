/**
 * ga4.js
 *
 * Exposes MCP tool(s) for querying GA4 reporting data via the
 * Analytics Data API. Read-only, no mutation.
 *
 * Default query mirrors the GSC default where it makes sense (page
 * path, sessions, engagement) but accepts any dimension or metric
 * the GA4 Data API supports for callers who need more than the
 * common set.
 *
 * Connects to: src/index.js (registers this tool with the MCP server)
 * Depends on: src/auth/google-auth.js, googleapis (analyticsdata v1beta)
 */

// TODO: define the tool schema (property ID, date range, dimensions,
// metrics, row limit) and the handler that calls
// analyticsdata.properties.runReport via the authenticated client
// from google-auth.js. Apply a sensible default dimension/metric set
// when the caller doesn't specify custom ones.

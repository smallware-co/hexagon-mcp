/**
 * gsc.js
 *
 * Exposes MCP tool(s) for querying Google Search Console performance
 * data. Read-only against the Search Console API, no mutation.
 *
 * Default query returns queries, pages, clicks, impressions, CTR, and
 * position for a given date range, the common case. Also accepts any
 * dimension or metric the Search Console API supports, so the tool
 * isn't limited to the default set.
 *
 * Connects to: src/index.js (registers this tool with the MCP server)
 * Depends on: src/auth/google-auth.js, googleapis (searchconsole v1)
 */

// TODO: define the tool schema (site URL, date range, dimensions,
// row limit) and the handler that calls searchconsole.searchanalytics.query
// via the authenticated client from google-auth.js. Apply the default
// dimension set (query, page, clicks, impressions, ctr, position) when
// the caller doesn't specify custom dimensions/metrics.

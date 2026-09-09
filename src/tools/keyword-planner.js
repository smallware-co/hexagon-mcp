/**
 * keyword-planner.js
 *
 * Exposes an MCP tool for querying Keyword Planner data via the
 * Google Ads API's KeywordPlanIdeaService. Read-only, no mutation,
 * no keyword plans are created or altered on the Ads account.
 *
 * Fully parameterized rather than a dashboard-style pull: the caller
 * must supply seed keywords, target locations, a date range, and
 * network selection (Google only, or Google plus search partners).
 *
 * Connects to: src/index.js (registers this tool with the MCP server)
 * Depends on: src/auth/ads-auth.js, google-ads-api
 */

// TODO: define the tool schema (keywords[], locations[], dateRange,
// network) and the handler that calls generateKeywordIdeas via the
// authenticated customer instance from ads-auth.js. Return volume,
// competition, and CPC data per keyword.

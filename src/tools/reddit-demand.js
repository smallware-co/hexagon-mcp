/**
 * reddit-demand.js
 *
 * Exposes an MCP tool for querying Reddit for buying-intent signal,
 * a substitute for Amazon's lack of a "what's selling now" API.
 * Rather than general rising posts, this searches for recommendation
 * and purchase-intent threads ("what should I get for X", "recommend
 * a Y") within caller-specified subreddits.
 *
 * Read-only, no posting, voting, or commenting. Shares the same
 * Reddit auth as reddit-trends.js but serves a distinct purpose:
 * demand signal for affiliate/product content, not general topic
 * trend spotting.
 *
 * Connects to: src/index.js (registers this tool with the MCP server)
 * Depends on: src/auth/reddit-auth.js, snoowrap
 */

// TODO: define the tool schema (subreddits[], productCategory, limit)
// and the handler that searches each subreddit for recommendation-
// intent phrasing via the authenticated client from reddit-auth.js.
// Return title, score, comment count, and age per thread so genuine
// demand can be judged from discussion volume, not just post count.

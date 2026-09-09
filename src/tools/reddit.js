/**
 * reddit.js
 *
 * Exposes an MCP tool for querying Reddit's /rising listing, used as
 * a trend/demand-signal source in place of Google Trends. Rising
 * surfaces posts gaining velocity right now, closer to Trends'
 * purpose than a plain /hot or /top pull would be.
 *
 * Read-only, no posting, voting, or commenting. Caller supplies one
 * or more subreddit names to scope the query to their niche.
 *
 * Connects to: src/index.js (registers this tool with the MCP server)
 * Depends on: src/auth/reddit-auth.js, snoowrap
 */

// TODO: define the tool schema (subreddits[], limit) and the handler
// that calls .getRising() per subreddit via the authenticated client
// from reddit-auth.js. Return title, score, comment count, and age
// per post so rising velocity can be judged from the results.

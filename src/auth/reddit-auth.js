/**
 * reddit-auth.js
 *
 * Builds an authenticated Reddit API client (via snoowrap) for the
 * rising-posts tool. Uses a Reddit "script" type app, the simplest
 * auth flow for a single-user, single-machine tool like this one.
 *
 * Connects to: src/tools/reddit.js
 * Depends on: src/config.js, snoowrap
 */

// TODO: instantiate a snoowrap client using REDDIT_CLIENT_ID,
// REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD, and
// REDDIT_USER_AGENT from config.js. Export a function that returns
// a ready-to-use client instance.

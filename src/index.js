#!/usr/bin/env node
/**
 * index.js
 *
 * Entry point for the Hexagon MCP server. Loads config, registers
 * the six tools (GSC, GA4, AdSense, Keyword Planner, Reddit Trends,
 * Reddit Demand), and starts the server on stdio transport so it can
 * be run directly by an MCP client like Claude Desktop.
 *
 * Connects to: src/config.js, src/tools/gsc.js, src/tools/ga4.js,
 * src/tools/adsense.js, src/tools/keyword-planner.js,
 * src/tools/reddit-trends.js, src/tools/reddit-demand.js
 * Depends on: @modelcontextprotocol/sdk
 */

// TODO: import Server + StdioServerTransport from the MCP SDK,
// import loadConfig from config.js, import the tool registration
// functions from each tools/ file, wire them together, and call
// server.connect(transport).

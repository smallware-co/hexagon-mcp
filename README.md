# Hexagon MCP

A read-only MCP server that connects an AI assistant directly to six data points a solo content operator actually checks daily: Google Search Console, GA4, AdSense, Keyword Planner, and two distinct Reddit signals. No exporting reports, no pasting data by hand, no dashboard-hopping. Query all six from the same conversation.

Six sources, six tools, one server. Hence the name.

Built by [Smallware Co.](https://github.com/smallware-co)

## What it does

- **Search Console** — queries, pages, clicks, impressions, CTR, and position by default. Any dimension or metric the Search Console API supports is also available for custom queries.
- **GA4** — a sensible default report out of the box, plus full access to any dimension or metric the GA4 Data API supports.
- **AdSense** — earnings, page views, impressions, and CTR by day, the highs/lows/anomalies check without opening the dashboard.
- **Keyword Planner** — parameterized keyword research: supply seed keywords, target locations, a date range, and network (Google only, or Google plus search partners), get volume, competition, and CPC data back.
- **Reddit Trends** — rising posts from subreddits you specify, a general "what's hot in my niche" signal that doesn't depend on Google Trends' unofficial, scrape-based API surface.
- **Reddit Demand** — the same API, aimed differently: recommendation and buying-intent threads in your niche, a demand proxy for product/affiliate content in place of data Amazon doesn't expose.

All six tools are read-only. Nothing is created, changed, or deleted on any platform. This server queries, your assistant reads, that's the whole loop.

## Who it's for

Solo operators and small content teams who don't have the budget for a dedicated SEO hire or agency retainer, but still want to understand what's actually working and what's worth writing about next. This doesn't replace judgment or strategy. It removes the manual step of exporting a report or scanning several separate tabs before you can even start asking questions, so you can go straight from question to analysis using live data.

## Bring your own credentials

This server ships with zero credentials and stores none. You authenticate with your own accounts, and everything runs on your own machine.

You'll need:

1. **A Google Cloud project** with the Search Console API, Analytics Data API, and AdSense Management API enabled.
2. **OAuth2 credentials** (client ID, client secret) from that project, plus a refresh token for your Google account, shared across GSC, GA4, and AdSense.
3. **Your Search Console property URL** exactly as it appears in Search Console (e.g. `sc-domain:example.com`).
4. **Your GA4 property ID**, found in GA4 Admin → Property Settings.
5. **Your AdSense publisher ID**, format `pub-XXXXXXXXXXXXXXXX`.
6. **A Google Ads developer token** approved for at least Basic Access, plus Ads API OAuth credentials and your Ads customer ID, for the Keyword Planner tool.
7. **A Reddit "script" type app**, created at [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps), shared by the Reddit Trends and Reddit Demand tools.

Copy `.env.example` to `.env` and fill in your own values. See that file for the full list of variables.

## Setup

```bash
git clone https://github.com/smallware-co/hexagon-mcp.git
cd hexagon-mcp
npm install
cp .env.example .env
# fill in .env with your own credentials
```

Add it to your MCP client config (Claude Desktop example):

```json
{
  "mcpServers": {
    "hexagon": {
      "command": "node",
      "args": ["/absolute/path/to/hexagon-mcp/src/index.js"]
    }
  }
}
```

Restart your client, and the tools will be available.

## Why not Google Trends?

Trends has no official API. The available workarounds scrape its internal endpoints, meaning they can break without warning. Reddit's `/rising` endpoint is an official, stable API and surfaces posts actively gaining traction, closer to what Trends is meant to show than a plain "top posts" pull. It's a narrower signal, Reddit attention isn't the same as search demand, but it's a signal that won't silently stop working.

## Status

Early build, in active development. Tool logic is being implemented incrementally, follow the repo for updates.

## License

MIT

# Cullen Express Intro

Gonna be great..... :dino:

## API

API = "Application Programming Interface"

Web server (eg. a Node.js server) with endpoints (ie, "URLs") that can receive or send data.

### GET /quotes

Returns a new quote, every time you hit it

Like so:

```json
{
  "quote": "Something pithy",
  "author": "Someone smart"
}
```

### POST /quotes

Create a new quote, like

```json
{
  "quote_to_add": {
    "quote": "Something pithy",
    "author": "Someone smart"
  }
}
```

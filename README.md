# Mist
A simple youtube downloader included in Tsunami

### Setup

To install Mist on your site you need to be using nodejs and express

1: Upload the mist folder to your website

2: Setup express
```js
const express = require('express');
const app = express();
```

3: Add mist
```js
const mist = require("mist-yt");
```

4: Setup mist
```js
app.use((req, res) => {
if (req.url.startsWith("/watch")) {
  mist.watch(req, res)
} else if (req.url.startsWith("/video")) {
  mist.video(req, res)
}
})
```

If you want some kind of error page you can set it up like this
```js
app.use((req, res) => {
if (req.url.startsWith("/watch")) {
  mist.watch(req, res)
} else if (req.url.startsWith("/video")) {
  mist.video(req, res)
} else {
  res.send("404 Error)
}
})
```

Full Result (see /demo)
```js
const express = require('express');
const app = express();
const mist = require("mist-yt");

app.use((req, res) => {
if (req.url.startsWith("/watch")) {
  mist.watch(req, res)
} else if (req.url.startsWith("/video")) {
  mist.video(req, res)
}
})

app.listen(8080, () => {
  console.log('Server running at localhost:8080');
});
```

Your all setup! Access Mist by going to `/watch`

### Pages
`/watch?=videoid&audio=false` Main video page

`/video?=videoid&audio=false` Just the video

### Usage
If you wish to use Mist commercially (on your service) you must include credit to Mist somewhere on your service
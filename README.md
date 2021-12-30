# Mist
A simple youtube downloader included in Tsunami

### Setup

### Locally

```sh
git clone https://github.com/FogNetwork/Mist

cd Mist

npm install

npm start
```

### On Your Website
To install Mist on your site you need to be using nodejs and express

1: Upload the mist folder to your website

2: Setup express
```js
const express = require('express');
const app = express();
```

3: Add mist
```js
const mist = require("./mist");
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

Your all setup! Access Mist by going to `/watch`

### Pages
`/watch?=videoid&audio=false` Main video page

`/video?=videoid&audio=false` Just the video

### Usage
If you wish to use Mist commercially (on your service) you mist include credit to mist somewhere on your service
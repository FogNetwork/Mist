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
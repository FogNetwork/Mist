const express = require('express');
const app = express();
const mist = require("./mist");

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/mist/index.html")
});

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
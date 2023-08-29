import express from "express";
import https from "https";
import fs from "fs";
import { render } from "./dist/render/server.js";
// import dotenv from "dotenv";

const app = express();
// const httpServer = https.createServer(
//   {
//     key: Buffer.from(process.env.SSL_KEY),
//     cert: Buffer.from(process.env.SSL_CERT),
//   },
//   app
// );
app.use(express.static("dist"));
app.get("/*", (req, res) => {
  fs.readFile("./dist/assets/index.html", "utf-8", (err, html) => {
    if (err) {
      console.error("Couldn't read file", err);
      return res.status(404).end();
    }

    html = html.replace(
      "REPLACE TITLE",
      req.url === "/" ? "Home Page" : "About Page"
    );
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${render(req.url).html}</div>`
    );

    res.send(html);
  });
});
// await new Promise((resolve) => httpServer.listen(8080, resolve));
// console.log(
//   `🚀 Server ready at https://localhost:8080.`
// );

app.listen(8080, () => {
  console.log("listening on 8080");
});

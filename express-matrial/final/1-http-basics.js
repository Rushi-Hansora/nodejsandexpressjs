import { createServer } from "node:http";
import { readFileSync } from "node:fs";

const homePage = readFileSync("./navbar-app/index.html");

const server = createServer((req, res) => {
  //  add css and js files to the server logo
  if (req.url === "/navbar-app/styles.css") {
    const css = readFileSync("./navbar-app/styles.css");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
  } else if (req.url === "/navbar-app/browser-app.js") {
    const js = readFileSync("./navbar-app/browser-app.js");
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(js);
  } else if (req.url === "/navbar-app/image.png") {
    const image = readFileSync("./navbar-app/image.png");
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(image);
  } else {
    if (req.url === "/") {
      console.log(req.url);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(homePage);
      res.end();
    } else if (req.url === "/about") {
      console.log(req.url);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Here is our short history");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(`
                <h1>Oops!</h1>
                <p>We can't seem to find the page you are looking for</p>
                <a href="/">Back Home</a>
                `);
    }
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

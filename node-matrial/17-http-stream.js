import { readFileSync } from "fs";
import { createServer } from "http";

const server = createServer((req, res) => {
    // const text = readFileSync("./content/big-file.txt", "utf-8");
    // res.end(text);
    const stream = createReadStream("./content/big-file.txt", "utf-8");
    stream.on("data", () => {
        stream.pipe(res);
    });
    stream.on("error", (err) => {
        console.log(err);
        res.end("File not found");
    }
    );
    stream.on("end", () => {
        res.end();
    }   
    );
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
})

const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const port = process.env.PORT || 9090;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`);
});

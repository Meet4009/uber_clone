const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 9090;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
const app = require("./app");
const http = require("http");
const server = http.createServer(app);
require("dotenv").config();
const port = process.env.PORT || 4040;
server.listen(port, () => {
  console.log(`server listening on ${port}`);
});

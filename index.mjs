import "dotenv/config";
import express from "express";
import cors from "cors";

//Serves main application
const app = express();
// CORS Allow-All-Origins
app.use(cors());
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(
    process.env["SERVICE_NAME"] + " listening at http://%s:%s",
    host,
    port
  );
});

// Routes
app.get("/", function (req, res) {
  res.end("Hello world!!");
});

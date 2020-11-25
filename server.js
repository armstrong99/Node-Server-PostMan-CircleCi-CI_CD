const express = require("express");
const routes = require("./routes");

// App
const app = express();

// Set port
const port = process.env.PORT || "1337";
app.set("port", port);

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));

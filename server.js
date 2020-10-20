const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors())

// This will fire our mongoose.connect statement to initialize our database connection
app.use(express.json(), express.urlencoded({ extended: true }));
require("./server/config/mongoose.config");



// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

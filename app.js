const express = require('express')
const app = express()
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
dotenv.config()

//db
mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB connected"))

mongoose.connection.on('error', err => console.log(`DB not conected: ${err.message}`))

//routes catcher
const postRoutes = require("./routes/post");

//middleware
app.use(morgan("dev"));
app.use(expressValidator());
app.use(bodyParser.json());
app.use("/", postRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));
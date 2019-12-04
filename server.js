const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const session = require("express-session");

const db = require("./models/index")

const PORT = process.env.PORT || 8080;

const app = express();

//view engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(session({
    secret: 'keyboard cat',
}));


//static assets
app.use(express.static("public"));

// routes
app.use(require("./controllers/staticController"));
app.use(require("./controllers/authController"));
app.use(require("./controllers/listController"));


//sync schema?
db.sequelize.sync({ force: process.env.NODE_ENV !== "production" })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`==> Server listening at http://localhost:${PORT}/`);
    });
  });

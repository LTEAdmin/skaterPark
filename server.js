import express from "express";
import path from "path";
import router from "./src/routers/routes.js";
import { engine } from "express-handlebars";

const app = express();
const __dirname = import.meta.dirname;
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, "/src")));

//routes
app.use("/", router);

// definicion uso de handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname+ '/src/views/layouts'));
app.engine('hbs', engine({
    extname: "hbs",
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, "./src/views/layouts"),
    partialsDir: path.join(__dirname, "./src/views/partials"),
  })
);
//escuchar el servidor
app.listen(
  port,
  console.log(`Example app listening on port http://localhost:${port}`)
);

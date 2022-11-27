const express = require("express");
require("dotenv").config();
const app = express();
const { engine } = require("express-handlebars");

const PORT = 3000;
const secretKey = process.env.SECRET;

app.use(express.urlencoded({ extended: false })); //false queery string
app.use(express.json());
app.use(express.static(__dirname + "/public"));
//Vincular a layOuts/main.handlebars
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/axios", express.static(__dirname + "/node_modules/axios/dist"));
app.use("/public", express.static(__dirname + "/public"));

app.engine("handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/mainLayout",
    extname: ".handlebars",
    //helpers: { fixInde: function (valor) { return parseInt(valor) + 1; },},
  }));

//setting
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", async (req, res) => { res.render("Home") });
app.get("/registro", async (req, res) => { res.render("Registro") });
app.get("/login", async (req, res) => { res.render("Login") });
app.get("/admin", async (req, res) => { res.render("Admin") });
app.get("/datos", async (req, res) => { res.render("Datos") });

app.get("/usuarios", async (req, res) => { res.status(200).send("PRUEBA GET USUARIOS") });
app.post("/registrar", async (req, res) => { res.status(200).send("PRUEBA POST REGISTRAR") });
app.post("/autenticar", async (req, res) => { res.status(200).send("PRUEBA POST AUTENTICAR") });
app.post("/eliminar", async (req, res) => { res.status(200).send("PRUEBA POST ELIMINAR") });

//SERVER
app.listen(PORT, () => console.log(`CORRIENDO EN EL PUERTO ${PORT}`));

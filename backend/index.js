import express from "express";
const app = express ();
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import inmuebleRutas from "./rutas/inmueble.js";

const puerto=8082;
//middlewares
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));


//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());

app.use(
  cors({
    origin: true,
    //cambio
    /*methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization,Custom-Header",
    optionsSuccessStatus: 200,*/
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/inmueble", inmuebleRutas);
//app.use("/api/usuarios", usuariosRoutes);
//Levantamos el servidor
app.listen(puerto, () =>{
    console.log("Servidor levantado en el puerto "+puerto);
})

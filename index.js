import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import db from "./db.js";


const app = express();

//ejecicion del codigo de conexion a la db
db()

app.use(express.json());

app.use("/", routes);

app.use(morgan("dev"));
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Este servidor se está ejecutando en el puerto", PORT);
});

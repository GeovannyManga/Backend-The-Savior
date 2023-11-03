import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.URI;


const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};

// exporta a la función para conectar a la base de datos antes de iniciar el servidor
export default connectToDatabase
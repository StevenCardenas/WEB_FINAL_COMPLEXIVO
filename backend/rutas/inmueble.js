import express from "express";
import { getInmuebles, getInmueble, createInmueble, updateInmueble, deleteInmueble } from "../controladores/inmueble.js";

const router = express.Router()

router.get("/find", getInmuebles);
router.get("/find/:id_inmueble", getInmueble);
router.post("/create", createInmueble);
router.put("/update/:id_inmueble", updateInmueble);
router.delete("/delete/:id_inmueble", deleteInmueble);



export default router

import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function addIdeaMejora(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        const values = req.body;
        const conn = await connect();
        const data = await conn.query("insert into accion (idReporte, idEmpleado, fechaLimite, fechaRealizado, archivoEvidencia, descripcion) values ?", [values]);
        return res.json(data[0]);
    }
    catch (e) {
        console.log(e)
    }
}
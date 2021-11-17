import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getDashboardData(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        
        const conn = await connect();
        const data = await conn.query('select idReporte, MONTH(fechaElaboracion), fechaElaboracion, idReporte, titulo, idReporte, idReporte, idReporte from reporteidea');
        return res.json(data);
    }
    catch (e) {
        console.log(e)
    }
}

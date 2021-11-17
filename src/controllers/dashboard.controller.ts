import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getDashboardData(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        
        const conn = await connect();
        const data = await conn.query("select idReporte as 'numProp', MONTH(fechaElaboracion) as 'mes', fechaElaboracion as 'fecha', idReporte as 'areaPropone', titulo as 'titulo', idReporte as 'areaMejora', idReporte as 'tipoMejora', idReporte as 'gerente' from reporteidea");
        return res.json(data);
    }
    catch (e) {
        console.log(e)
    }
}

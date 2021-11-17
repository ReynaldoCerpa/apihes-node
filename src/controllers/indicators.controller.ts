import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getVerticalBarData(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        
        const conn = await connect();
        const data = await conn.query("select MONTH(fechaElaboracion) as 'mes', count(idReporte) from reporteidea group by mes");
        return res.json(data[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function getHorizontalBarData(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        
        const conn = await connect();
        const data = await conn.query("select idPropositor, count(idReporte) from reporteidea group by idPropositor;");
        return res.json(data[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function getPieChartData(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        
        const conn = await connect();
        const data = await conn.query("select count(idReporte) as 'cuenta', 100 - count(idReporte) from reporteidea");
        return res.json(data[0]);
    }
    catch (e) {
        console.log(e)
    }
}
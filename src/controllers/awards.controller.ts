import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getAwardsData(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        
        const conn = await connect();
        const data = await conn.query("select idReporte as numProp, 'FOO' as nombre, 'FOO' as areaPropone, titulo from reporteidea");
        return res.json(data[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function getTopThree(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        
        const conn = await connect();
        const data = await conn.query("select titulo as 'title', idPropositor as 'author', propuesta as 'description' from reporteidea r limit 3");
        return res.json(data[0]);
    }
    catch (e) {
        console.log(e)
    }
}

import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getDashboardData(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("Connected");
        const values = req.body;
        const conn = await connect();
        const data = await conn.query("insert into accion values ?", [values]);
        return res.json(data[0]);
    }
    catch (e) {
        console.log(e)
    }
}
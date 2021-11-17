import express, {Application} from "express";
import path from "path";
import cookieParser from "cookie-parser"
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression"
import bodyParser from "body-parser";

//Routes
import indexRoute from "./routes/index.routes"

export class App{
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cookieParser());
        this.app.use(bodyParser.json())
        this.app.use(helmet())
        this.app.use(compression())
    }

    routes(){
        this.app.use(indexRoute);
    }

    settings(){
        this.app.set("port", this.port || process.env.PORT || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("Server running on port", this.app.get("port"));
    }
}
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Mongo } from "./Database";
import { RoutingEngine } from "./Routing/RoutingEngine";
export abstract class Server {
    private router: any;

    constructor(private port : number = 3000, private app : any = express(), 
    private mongo: Mongo = new Mongo(), private routingEngine: RoutingEngine = new RoutingEngine()) {
    
     }

     protected abstract AddRouting(routingEngine: RoutingEngine, router: any) : void;

     public start(): void{
        this.OnStart();
        // With the express use method we can set our middleware accordingly
        //In this case since we deal with images we need to set our limit higher than 100kb(by deafult)
        this.app.use(bodyParser.json({ limit: `100mb` }));
        this.app.use(bodyParser.urlencoded({ limit: `100mb`, extended: true }));

        // The listen method used to bind and listen the connections on the specified host and port. 
        // This method is identical to Node’s http.Server.listen() method.
        this.app.listen(this.port, () => 
        console.log(`Express server running on port ${this.port}`));

        this.mongo.Connect();
        this.router = express.Router();
        this.AddRouting(this.routingEngine, this.router);
        this.app.use(this.router);
        this.OnStart();
        this.app.listen(this.port, () => console.log(`Express server running on
       port ${this.port}`));

        }
        // The OnStart method is responsible for sending a message whenever we receive a get request

        protected OnStart() : void {
            this.app.get(`/`, (request : any, response : any) => 
            response.send(`Hello from the server`));
           }           
        public WithCorsSupport(): Server {
        this.app.use(cors());
        return this;
        }
           
        
    }
    
       
       
       
    
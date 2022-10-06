import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
export class Server {
    constructor(private port : number = 3000, private app : any = express())
    {
     }
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

    // Following the idea of the single responsibility we seperate each route into a single class
    // And that class going to implement the interface below.
        export interface IRouter {
            AddRoute(route: any): void;
       }
       export class RoutingEngine {
        constructor(private routing: IRouter[] = new Array<IRouter>()) {
        }
        //The method below accept generics as parameter and thanks to typescript
        // when we call the new keyword, we can decide what is going to be the type 
        // which will added to the 

        public Add<T1 extends IRouter>(routing: new () => T1, route: any): void {
            const routed = new routing();
            routed.AddRoute(route);
            this.routing.push(routed);
        }
       }

       
       
    
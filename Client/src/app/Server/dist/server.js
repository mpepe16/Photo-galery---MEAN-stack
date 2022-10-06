"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const Database_1 = require("./Database");
const RoutingEngine_1 = require("./Routing/RoutingEngine");
class Server {
    constructor(port = 3000, app = (0, express_1.default)(), mongo = new Database_1.Mongo(), routingEngine = new RoutingEngine_1.RoutingEngine()) {
        this.port = port;
        this.app = app;
        this.mongo = mongo;
        this.routingEngine = routingEngine;
    }
    start() {
        this.OnStart();
        // With the express use method we can set our middleware accordingly
        //In this case since we deal with images we need to set our limit higher than 100kb(by deafult)
        this.app.use(body_parser_1.default.json({ limit: `100mb` }));
        this.app.use(body_parser_1.default.urlencoded({ limit: `100mb`, extended: true }));
        // The listen method used to bind and listen the connections on the specified host and port. 
        // This method is identical to Node’s http.Server.listen() method.
        this.app.listen(this.port, () => console.log(`Express server running on port ${this.port}`));
        this.mongo.Connect();
        this.router = express_1.default.Router();
        this.AddRouting(this.routingEngine, this.router);
        this.app.use(this.router);
        this.OnStart();
        this.app.listen(this.port, () => console.log(`Express server running on
       port ${this.port}`));
    }
    // The OnStart method is responsible for sending a message whenever we receive a get request
    OnStart() {
        this.app.get(`/`, (request, response) => response.send(`Hello from the server`));
    }
    WithCorsSupport() {
        this.app.use((0, cors_1.default)());
        return this;
    }
}
exports.Server = Server;

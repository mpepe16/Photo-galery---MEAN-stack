"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingEngine = void 0;
class RoutingEngine {
    constructor(routing = new Array()) {
        this.routing = routing;
    }
    //The method below accept generics as parameter and thanks to typescript
    // when we call the new keyword, we can decide what is going to be the type 
    // which will added to the 
    Add(routing, route) {
        const routed = new routing();
        routed.AddRoute(route);
        this.routing.push(routed);
    }
}
exports.RoutingEngine = RoutingEngine;

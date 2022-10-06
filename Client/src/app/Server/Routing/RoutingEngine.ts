import { IRouter } from "./IRouter";

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

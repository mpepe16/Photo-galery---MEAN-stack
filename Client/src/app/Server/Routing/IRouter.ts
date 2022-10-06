// Following the idea of the single responsibility we seperate each route into a single class
// And that class going to implement the interface below.
    export interface IRouter {
        AddRoute(route: any): void;
   }
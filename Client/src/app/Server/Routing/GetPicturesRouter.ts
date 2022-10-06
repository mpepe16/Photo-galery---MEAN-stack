import { IRouter } from "./IRouter";

export class GetPicturesRouter implements IRouter {
    public AddRoute(route: any): void {
        route.get('/get', 
        (request: Request, response: Response) => {

        })
    }
    
}
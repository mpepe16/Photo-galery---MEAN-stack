import { IRouter } from "./IRouter";

export class AddPictureRouter implements IRouter {
    public AddRoute(route: any): void {
    route.post('/add/', (request: Request, response: Response) => {
    })
   }
}
   
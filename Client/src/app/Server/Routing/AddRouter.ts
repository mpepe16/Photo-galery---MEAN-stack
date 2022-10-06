import { IRouter } from "./IRouter";

// This class will be responsible for handling the post request, ie adding the picture.

export class AddPictureRouter implements IRouter {
    public AddRoute(route: any): void {
    route.post('/add/', (request: Request, response: Response) => {
    })
   }
}
   
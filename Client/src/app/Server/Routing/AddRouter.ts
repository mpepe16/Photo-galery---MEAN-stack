import { Picture } from "../Database";
import { IRouter } from "./IRouter";
import { Response} from "express";

// This class will be responsible for handling the post request, ie adding the picture.

export class AddPictureRouter implements IRouter {
    public AddRoute(route: any): void {
    route.post('/add/', (request: Request, response: Response) => {

        // First we instantiate the a new Picture with our request body

        const picture = new Picture(request.body);
        
        // We call the picture - which is basically a model provided by the mongodb - and call it save method
        // The method than either send an error or serializes a JavaScript object to JSON and puts it in the response body.

        picture.save((err : any, picture : any) => {
            if(err){
                response.send(err);
            }
            response.json(picture);
        })
    })
   }
}
   
import { IRouter } from "./IRouter";
import { Request, Response } from "express";
import { Picture }from  "../Database";

export class FindByIdRouter implements IRouter {
    AddRoute(route: any): void {
        route.get('/id/:id', (request: Request, response: Response) => {

            // For some reason its necessary to put into brackets and "" sign the id request param

            Picture.findById({_id: request.params["id"]}, '-_id', (err: any, picture: any) => {
            if (err) {
                response.send(err);
            }
                response.json(picture); })
        })
    }
}
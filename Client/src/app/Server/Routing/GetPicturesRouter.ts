import { IRouter } from "./IRouter";
import { Request, Response } from "express";
import { Picture, PictureSchema } from "../Database"

export class GetPicturesRouter implements IRouter {
    public AddRoute(route: any): void {
        route.get('/get', 
        (request: Request, response: Response) => {
            Picture.distinct("_id", (err: any, picture: any) => {
                if(err) {
                    response.send(err);
                }
                response.send(picture);
            })
        })
    }
    
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPictureRouter = void 0;
const Database_1 = require("../Database");
// This class will be responsible for handling the post request, ie adding the picture.
class AddPictureRouter {
    AddRoute(route) {
        route.post('/add/', (request, response) => {
            // First we instantiate the a new Picture with our request body
            const picture = new Database_1.Picture(request.body);
            // We call the picture - which is basically a model provided by the mongodb - and call it save method
            // The method than either send an error or serializes a JavaScript object to JSON and puts it in the response body.
            picture.save((err, picture) => {
                if (err) {
                    response.send(err);
                }
                response.json(picture);
            });
        });
    }
}
exports.AddPictureRouter = AddPictureRouter;

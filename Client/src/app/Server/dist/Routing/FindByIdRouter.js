"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdRouter = void 0;
const Database_1 = require("../Database");
class FindByIdRouter {
    AddRoute(route) {
        route.get('/id/:id', (request, response) => {
            // For some reason its necessary to put into brackets and "" sign the id request param
            Database_1.Picture.findById({ _id: request.params["id"] }, '-_id', (err, picture) => {
                if (err) {
                    response.send(err);
                }
                response.json(picture);
            });
        });
    }
}
exports.FindByIdRouter = FindByIdRouter;

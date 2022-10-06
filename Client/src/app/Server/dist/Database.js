"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = exports.PictureSchema = exports.Mongo = void 0;
const mongoose_1 = __importStar(require("mongoose"));
class Mongo {
    constructor(url = 
    // MongoDB has its own protocol which means our url should start with mongodb
    "mongodb://localhost:27017/packt_atp_chapter_04") {
        this.url = url;
    }
    // With the Connect method we just usue the mongoose built-in connection method 
    // and check if we were able to connect to the given url.
    Connect() {
        mongoose_1.default.connect(this.url, (e) => {
            if (e) {
                console.log(`Unable to connect ` + e);
            }
            else {
                console.log(`Connected to the database`);
            }
        });
    }
}
exports.Mongo = Mongo;
// A simple database shcema for our picture.
exports.PictureSchema = new mongoose_1.Schema({
    Image: String,
    Name: String,
    Description: String,
    Tags: String,
});
exports.Picture = mongoose_1.default.model('picture', exports.PictureSchema);

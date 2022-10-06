import mongoose, { Schema } from "mongoose";

export class Mongo {
    constructor(private url : string =
        
        // MongoDB has its own protocol which means our url should start with mongodb

        "mongodb://localhost:27017/packt_atp_chapter_04") {
         }

        // With the Connect method we just usue the mongoose built-in connection method 
        // and check if we were able to connect to the given url.
         public Connect(): void {
         mongoose.connect(this.url, (e:any) => {
         if (e) {
         console.log(`Unable to connect ` + e);
         } else {
         console.log(`Connected to the database`);
         }});}
}

// A simple database shcema for our picture.

export const PictureSchema = new Schema({
    Image: String,
    Name: String,
    Description: String,
    Tags: String,
  });

  export const Picture = mongoose.model('picture', PictureSchema);

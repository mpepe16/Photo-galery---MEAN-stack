
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export interface IPictureModel {
  Image: string | null | ArrayBuffer;
  Name: string;
  Description: string;
  Tags: string;
 }
 export class PictureModel implements IPictureModel {
  Image!: string ;
  Name!: string;
  Description!: string;
  Tags!: string;
 }
 
export class FilePreviewService {

  // Since dealing with images can take a long time, we setup an async function
  // And we expect to get back a promise. To be precise, we expect to get IPictureModel promise.
  // Also we would like to make sure that we are dealing with images, so we setup a few if statements.
  
  public async Preview(files: any): Promise<IPictureModel> {
    return await new Promise((resolve, reject) => {
      if (files.length === 0) {
        return;
       }
       const file = files[0];
       if (file.type.match(/image\/*/) === null) {
        reject(`The file is not an image file.`);
        return;
       }
       // Till this point we know we are dealing with an image file.

       const imageModel: IPictureModel = new PictureModel();
       imageModel.Name = file.name;
       const reader = new FileReader();

       // In order to set our imageModel.Image property to the reader result, we need to chage
        // The interface Image property to handle null or ArrayBuffer.

       reader.onload = (evt) => {
        imageModel.Image = reader.result;
        resolve(imageModel);
       };
       reader.readAsDataURL(file);
       
    });

  }
  constructor() { }
}

 

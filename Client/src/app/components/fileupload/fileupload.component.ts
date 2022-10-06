import { Component, OnInit } from '@angular/core';
import { FilePreviewService } from 'src/app/Services/file-preview-service.service';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { IPictureModel, PictureModel } from 'src/app/types';

@Component({
  selector: 'atp-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  protected imageSource!: IPictureModel | null;
  protected message: any;
  protected description!: string;
  protected tags!: string ;

  // Angular provide us a common dependency injection through the constructor
  // where we basically just name "what" we would like inject and the "how"
  // gonna be handled be the Angular

  constructor(
    private dialog: MatDialogRef<FileuploadComponent>,
    private preview: FilePreviewService) 
    { }
    
    // This method is responsible for accepting the selected file from the FileuploadComponent
    // and call the previously created Preview method from the FilePreviewService to check
    // if the selected file is valid or not.

    public OnImageSelected(files: any) : void {
      this.preview.Preview(files).then(response => {
        this.imageSource = response;
      }).catch(error => {
        this.message = error;
      });
    }

    // This method is just basically setting the class properties with the help of the imageSource.
    // And the close method is finish the current dialog.

    public Save(): void {
      this.imageSource.Description = this.description;
      this.imageSource.Tags = this.tags;
      this.dialog.close(this.imageSource);
     }
     
  
  ngOnInit(): void {
  }

}

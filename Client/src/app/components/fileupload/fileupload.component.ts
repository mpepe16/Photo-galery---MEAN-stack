import { Component, OnInit } from '@angular/core';
import { IPictureModel } from 'src/app/Services/file-preview-service.service';

@Component({
  selector: 'atp-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  protected imageSource!: IPictureModel | null;
  protected message: any;
  protected description!: string;
  protected tags!: string;


  constructor() { }

  ngOnInit(): void {
  }

}

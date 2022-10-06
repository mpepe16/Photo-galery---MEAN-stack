import { Component, OnInit } from '@angular/core';
import { IPictureModel } from 'src/app/types';

@Component({
  selector: 'atp-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss']
})
export class PageBodyComponent implements OnInit {
  Pictures: Array<IPictureModel>; 
  constructor(private addImage: AddImageService, private loadImage: LoadImageService,
     private transfer: TransferDataService) {
     this.Pictures = new Array<IPictureModel>();
     }
    

  ngOnInit(): void {
  }

}

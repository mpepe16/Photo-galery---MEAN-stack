import { Component, Input, OnInit } from '@angular/core';
import { colonyBuilder } from 'src/app/colonyBuilder';


@Component({
  selector: 'atp-colony',
  templateUrl: './colony.component.html',
  styleUrls: ['./colony.component.scss']
})
export class ColonyComponent implements OnInit {
    
  constructor() {
   }

  ngOnInit(): void {
  }

  buildColony(width: string, heigth: string): void{
    const container = document.getElementById("container") as HTMLElement;
        container.style.setProperty('--grid-rows', width);
        container.style.setProperty('--grid-cols', heigth);
        for (let c = 0; c < (parseInt(width) * parseInt(heigth)); c++) {
            let cell = document.createElement("div");
            cell.innerHTML = c.toString();
            container.appendChild(cell).className = "grid-item";
  }
}

}

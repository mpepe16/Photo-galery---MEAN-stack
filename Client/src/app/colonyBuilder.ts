export class colonyBuilder {
    width: string;
    heigth: string;
    constructor(width: string, height: string) {
        this.width = width;
        this.heigth = height;
    }

    build(): void {
        const container = document.getElementById("container") as HTMLElement;
        container.style.setProperty('--grid-rows', this.width);
        container.style.setProperty('--grid-cols', this.heigth);
        for (let c = 0; c < (parseInt(this.width) * parseInt(this.heigth)); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
  };
    }

}
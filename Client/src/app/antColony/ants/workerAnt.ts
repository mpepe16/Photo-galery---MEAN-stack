import { ant } from "./ant";

export class workerAnt extends ant{

    constructor(age:number, name:string){
        super(age, name);
    }

    move(coordinateX: number, coodinateY: number): void {
        throw new Error("Method not implemented.");
    }
    log(): void {
        throw new Error("Method not implemented.");
    }
    
}
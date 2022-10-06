export abstract class ant{
    age: number;
    name: string;

    constructor( age: number,name: string) {
        this.age = age;
        this.name = name;
    }

    abstract move(coordinateX : number, coodinateY: number) : void;
    abstract log() : void;
}
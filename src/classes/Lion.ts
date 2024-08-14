import Animal from "./Animal";

class Lion extends Animal{
    noOfEyes: Number=2;
    noOfLegs: Number=4;
    sound: string="Roar";
    diet: string="Conivore";
    habitat: string="Grassland";
    move(): void {
        console.log(`${this.name}  is walking`)
    }
    eatingHabits(): void {
        console.log(`${this.name}  is a pure-non vegetarion`)
    }
    constructor(name:string){
        super(name);
        console.log(`Inside ${this.name}  Constructor`)
    }
    

}
export default Lion;
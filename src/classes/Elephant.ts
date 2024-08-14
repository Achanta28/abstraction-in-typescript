import Animal from "./Animal";

class Elephant extends Animal{
    noOfEyes: Number=2;
    noOfLegs: Number=4;
    sound: string="Trumpet";
    diet: string="Herbivore";
    habitat: string="Savannah";
    move(): void {
        console.log(`${this.name} is Walking on its four legs`)
    }
    eatingHabits(): void {
        console.log(`${this.name}    is a pure-vegetarion`)
    }
    constructor(name:string){
        super(name);
        console.log(`Inside ${this.name}  Constructor`)
    }
}
export default Elephant;
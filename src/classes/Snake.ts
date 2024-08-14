import Animal from "./Animal";

class Sanke extends Animal{
    noOfEyes: Number=2;
    noOfLegs: Number=0;
    sound: string="Hiss";
    diet: string="Carnivore";
    habitat: string="Desert";
    move(): void {
      console.log(`${this.name}  is slithering`)
    }
    eatingHabits(): void {
        console.log(`${this.name}  is a veg and non vegetarion`)
    }


}

export default Sanke;
abstract class Animal{
   constructor(name:string){
    this.name=name;
    console.log("Inside Animal constructor");
   }
   protected name:string;
   abstract noOfEyes:Number;
   abstract noOfLegs:Number;
   abstract sound:string;
   abstract diet:string;
   abstract habitat:string;

   abstract move():void;
   abstract eatingHabits():void;

   sleepingHabits=()=>{
    console.log("Aniaml is Sleeping")
   }
   
}
export default Animal;
import React from 'react';

import './App.css';
import Welcome from './components/Welcome';

import Lion from './classes/Lion';
import Elephant from './classes/Elephant';
import Sanke from './classes/Snake';

function App() {
  //let animalObj = new Animal();
  let lion =new Lion("Leo");
  lion.eatingHabits();
  lion.move();
  console.log(lion.noOfEyes);
  console.log(lion.noOfLegs);
  console.log(lion.sound);
  console.log(lion.diet);
  console.log(lion.habitat);
 
  
  let elephant = new Elephant("Ellie");
  elephant.eatingHabits();
  elephant.move();
  console.log(elephant.noOfEyes);
  console.log(elephant.noOfLegs);
  console.log(elephant.sound);
  console.log(elephant.diet);
  console.log(elephant.habitat);

  let snake = new Sanke("Slinky");
  snake.eatingHabits();
  snake.move();
  console.log(snake.noOfEyes);
  console.log(snake.noOfLegs);
  console.log(snake.sound);
  console.log(snake.diet);
  console.log(snake.habitat);
 


  return (
    <div className="App">
      <Welcome/>
    </div>
  );
}

export default App;

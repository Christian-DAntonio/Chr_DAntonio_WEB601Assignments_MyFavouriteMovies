import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent {
@Output() newBandEvent = new EventEmitter<Content>();
newBandItem: Content;

addBand(): void{
  this.newBandEvent.emit(this.newBandItem);
}

}


let promise = new Promise((success, fail) =>{
  let testPass = true;
  if(testPass){
    success("Success was achieved!");
  }
  else{
    fail("Failure :(")
  }
  promise.then(successResult =>
    console.log(successResult))
    .catch(failResult => console.log(failResult));
})

let getStuff = async function () {
  return "stuff";
}

let getTheSameStuff = function () {
  return Promise.resolve("stuff");
}

let getAllTheStuff = async () => {
  const theFirstStuff = await getStuff();
  const theSecondStuff = await getTheSameStuff();

  return await [theFirstStuff, theSecondStuff];
}
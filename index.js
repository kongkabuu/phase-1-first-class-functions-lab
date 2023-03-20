// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2);
}
const returnLastTwoDrivers = (array)=>{
    return array.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
  let multiplier = x;
  return (param)=>{
    return multiplier * param;
  }

}

const fareDoubler = (x)=>{
let double =createFareMultiplier(2); 

return double(x);
}

const fareTripler = (x)=> {
 let triple = createFareMultiplier(3);
 return triple(x);
}

function selectDifferentDrivers(array, func){

return func(array);

}
console.log(fareTripler(4))
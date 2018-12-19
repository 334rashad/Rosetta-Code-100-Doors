function getFinalOpenedDoors (numDoors) {
  // Good luck!
  let doorsArray = new Array(numDoors).fill(false);
  let openDoors = [];
  for(let i = 0; i<numDoors; i++){
    for(let j = i; j<numDoors; j+=1+i){
      if(doorsArray[j]){
        doorsArray[j]=false;
      }else doorsArray[j]=true;
    }
  }

  for(let i = 0; i<numDoors; i++){
    if(doorsArray[i]){
      openDoors.push(i+1);
    }
  }
  return openDoors;
}
getFinalOpenedDoors(100)
console.log(getFinalOpenedDoors(100))
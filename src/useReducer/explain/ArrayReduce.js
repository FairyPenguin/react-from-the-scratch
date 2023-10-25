const array = [2, 3, 4, 5];

const reducedArray = array.reduce((prevState, currentState) => {
  console.log(prevState + currentState);
  return prevState + currentState;
}, 1);

// the prev and current States comes from the itreation
//of the reduce loop
// the first current state will be the intial value [1]

console.log(reducedArray);

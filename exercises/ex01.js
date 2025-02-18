// Create a function called removeEvenNums that removes even numbers from the stack
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeEvenNums(stack) {
  // temporary stack to hold values
  const tempStack = new Stack();

  //transfer from the original to the temporary
  while(!stack.isEmpty()){
    const top = stack.pop();
    //if value is odd/even
    if(top % 2 !== 0){
      //only odd to temporary stack
      tempStack.push(top);
    }
  }

  //values are returned to the original
  while(!tempStack.isEmpty()){
    stack.push(tempStack.pop());
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(1);
stack.push(3);
stack.push(6);

removeEvenNums(stack)
console.log(stack.printStack()) // [5, 1, 3]
function foo(a,b){
  //Check if both inputs are numbers
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b; //Use + for numerical addition
  } else {
    return "Invalid input types";
  }
}
console.log(foo(1,2));//Expected output:3
console.log(foo(1,"2"));//Expected output:Invalid input types
console.log(foo("1",2));//Expected output:Invalid input types
console.log(foo("1","2"));//Expected output:Invalid input types
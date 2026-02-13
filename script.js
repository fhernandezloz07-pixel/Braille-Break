//Get the display element 
const outputBox = document.getElementById("outputBox");

//Create 3 Functions:as chosen in our HTML
  //1. One for "onScreen" 
  function onScreen(input){ //The reason we put the input poarameter is because we are passing in a character when we call this functio
    outputBox.value += input;
  }
  //2. Another for "evaluate"
  function calculateResult(){
    outputBox.value = eval(outputBox.value); //Evaluates the numbers, we can do this with the evaluation function
  }
  //3. And the last for "clearOutputBox"
  function clearOutputBox(){
      outputBox.value = "";
  }
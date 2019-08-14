function XO(str) {

  if (numOfX(str) === numOfO(str)) {
    return true;
  }
  
  else {
    return false;
  }
}

function numOfX(str) {
  
  let num = 0;
  for(let i=0; i<str.length; i++){
    if(str[i] === "x" || str[i] === "X"){
      num = num + 1;
    }
  }
  return num;
}

function numOfO(str) {
  
  let num = 0;
  for(let i=0; i<str.length; i++){
    if(str[i] === "o" || str[i] === "O"){
      num = num + 1;
    }
  }
  return num;
}

var result;

if (XO("xXocgoo") === true){
  console.log("The number of X's and O's are the same!")
}
else{
  console.log("The number of X's and O's are different!")
}

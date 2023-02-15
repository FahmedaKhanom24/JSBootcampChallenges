/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1,num2,num3) {
  if (num1>num2 && num1>num3){
    return num1
  }
  else if (num2>num1 && num2>num3){
    return num2
  }
 
  else{
    return num3
  }

}

function addUnknown(num1,num2,num3=0,num4=0,num5=0) {
  if (num3===undefined){
    num3=0
  }
  
  return num1+num2+num3+num4+num5
}

function evenOrOdd() {

}

function operator() {

}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};

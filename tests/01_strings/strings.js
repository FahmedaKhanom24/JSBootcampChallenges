/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if(str.includes(letter)){
    return true
  }
  else{
    return false
  }  
}

function cap(str, letter) {
  const index= str.indexOf(letter)+1
  const letter1 = (str[index])
  if (str.includes(letter)){
    
    return (letter1.toUpperCase())

   
  }
  else{
    const message = "sorry not found"
    return message
  }

}

function firstCharacter(str1, str2) {

  // const str1FirstChar= str1[0].toLowerCase()
  // const str2FirstChar= str2[0].toLowerCase()
  // if (str1FirstChar=== str2FirstChar){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  if(str1[0].toLowerCase()===str2[0].toLowerCase()){
    return true
  }

  return false
  // const string1= str1.charAt(0)
  // const string2 = str2.charAt(0)
  // if (string1.toLowerCase() === string2.toLowerCase()){
  //   return true;
  // }
    
  // else{
  //   return false;
  // }
    

}

module.exports = {
  cap, firstCharacter, doesInclude,
};

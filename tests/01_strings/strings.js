/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  const doesIncludeLetter = str.includes(letter);
  return doesIncludeLetter;
  
}

function cap(str, letter) {
  if (str.includes(letter)){
    const lenletter= str.indexOf(letter)
    const addletterindex= (lenletter+1)
    const letterwithadd = (str[addletterindex])
    return (letterwithadd.toUpperCase())

   
  }
  else{
    const message = "sorry not found"
    return message
  }

}

function firstCharacter(str1, str2) {
  const string1= str1.charAt(0)
  const string2 = str2.charAt(0)
  if (string1.toLowerCase() === string2.toLowerCase()){
    return true;
  }
    
  else{
    return false;
  }
    

}

module.exports = {
  cap, firstCharacter, doesInclude,
};

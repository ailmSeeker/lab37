// code your solution here
function saturdayFun(x = 'roller-skate'){
  function test(){
    return `This Saturday, I want to ${x}!`
  } 
  return test();
}

function mondayWork(x="go to the office"){
  return `This Monday, I will ${x}.`
 
}
function wrapAdjective(x){
  if(x === "*"){
   return function addAdj(){
      return  `You are ${x}a hard worker${x}!`
    } 
  }

  if(x === "0"){
   return function addAdj(){
      return 'You are ||a dedicated programmer||!'    }
  }  
  
  if(x === "||"){
   return function addAdj(){
      return 'You are ||a dedicated programmer||!'    }
  }  
  return function results(){return 0;}
}



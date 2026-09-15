let textInput=document.getElementById('text-input');
let btn=document.getElementById('check-btn');
let result=document.getElementById('result');


function checkPalindrome(){
  let givenInput=textInput.value.trim();

  if(givenInput.length<1){
    alert("Please input a value");
  }
  let cleanedInput = givenInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let i=0;
  let j=cleanedInput.length-1;

  while(i<=j){
    if(cleanedInput[i]!==cleanedInput[j]){
      result.innerText=`${givenInput} is not a palindrome`; 
      textInput.value = "";
      return;
    }
    i++;
    j--;
  }
  result.innerText=`${givenInput} is a palindrome`; 
  textInput.value = "";
}

btn.addEventListener("click",checkPalindrome);
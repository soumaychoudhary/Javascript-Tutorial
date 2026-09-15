const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");


// const roman = {
//   1000 : M,
//   900 : CM,
//   500 : D,
//   400 : CD,
//   100 : C,
//   90 : XC,
//   50 : L,
//   40 : XL,
//   10 : X,
//   9:IX,
//   5:V,
//   4:IV,
//   1:I
// };

const numberToRoman = ()=>{
  let result="" ;
  if(input.value === ""){
    output.innerText="Please enter a valid number";
    output.style.visibility = "visible";
    return;
  }
  if(input.value < 1 ){
    output.innerText="Please enter a number greater than or equal to 1";
    output.style.visibility = "visible";
    return;
  }
  if(input.value>=4000){
    output.innerText="Please enter a number less than or equal to 3999";
    output.style.visibility = "visible";
    return;
  }

  let x = input.value;
  while(x>0){
    if(x>=1000 && x<4000){
      result += "M";
      x -=1000;
    }else if(x>=900 && x<1000){
      result += "CM";
      x -=900;
    }else if(x>=500 && x<900){
      result += "D";
      x -=500;
    }else if(x>=400 && x<500){
      result += "CD";
      x -=400;
    }else if(x>=100 && x<400){
      result += "C";
      x -=100;
    }else if(x>=90 && x<100){
      result += "XC";
      x -=90;
    }else if(x>=50 && x<90){
      result += "L";
      x -=50;
    }else if(x>=40 && x<50){
      result += "XL";
      x -=40;
    }else if(x>=10 && x<40){
      result += "X";
      x -=10;
    }else if(x>=9 && x<10){
      result += "IX";
      x -=9;
    }else if(x>=5 && x<9){
      result += "V";
      x -=5;
    }else if(x>=4 && x<5){
      result += "IV";
      x -=4;
    }else if(x>=1 && x<4){
      result += "I";
      x -=1;
    }
  }
  output.innerText = result;
  output.style.visibility = "visible";
  input.value = "";
}

btn.addEventListener("click",numberToRoman)


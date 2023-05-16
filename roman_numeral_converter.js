function convertToRoman(num) {
  let digits = [];
  while (num !== 0) {
    digits.push(num % 10);
    num = Math.trunc(num/10)
  }
  let romans = [];

//10ˆ0
  switch(digits[0]) {
    case 0: break;
    case 1: romans.push("I"); break;
    case 2: romans.push("II"); break;
    case 3: romans.push("III"); break;
    case 4: romans.push("IV"); break;
    case 5: romans.push("V"); break;
    case 6: romans.push("VI"); break;
    case 7: romans.push("VII"); break;
    case 8: romans.push("VIII"); break;
    case 9: romans.push("IX"); break;
  }

//10^1
  switch(digits[1]) {
    case 0:break;
    case 1:romans.push("X");break;
    case 2:romans.push("XX");break;
    case 3:romans.push("XXX");break;
    case 4:romans.push("XL");break;
    case 5:romans.push("L");break;
    case 6:romans.push("LX");break;
    case 7:romans.push("LXX");break;
    case 8:romans.push("LXXX");break;
    case 9:romans.push("XC");break;
  }

  //10^2
  switch(digits[2]) {
    case 0:break;
    case 1:romans.push("C");break;
    case 2:romans.push("CC");break;
    case 3:romans.push("CCC");break;
    case 4:romans.push("CD");break;
    case 5:romans.push("D");break;
    case 6:romans.push("DC");break;
    case 7:romans.push("DCC");break;
    case 8:romans.push("DCCC");break;
    case 9:romans.push("CM");break;
  }

  //10^3
  switch(digits[3]) {
    case 0:break;
    case 1:romans.push("M");break;
    case 2:romans.push("MM");break;
    case 3:romans.push("MMM");break;
  }
  
  romans.reverse();
  
 return romans.join("");
}

convertToRoman(1234);

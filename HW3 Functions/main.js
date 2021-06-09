const getMaxDigitNumber = (number) => {
    let newString = number.toString();
    for (i = 0; i <= newString.length; i++) {
        if newString[i] >= newString[i + 1]{
maxValue=newString[i]
        }
        else{
            maxValue=newString[i+1]
        }
   }
   return maxValue;
}
console.log(getMaxDigitNumber(123456))

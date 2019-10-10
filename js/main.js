function checkIfValExist(myVal){
    var add,initialVa,currentInput;
   var valueOne = document.getElementById("valueOne");
   var valueTwo = document.getElementById("valueTwo");
   var valueThree = document.getElementById("valueThree");

var finalResultScreen =  document.getElementById("result");
var enteredValueScreen = document.getElementById("inputValue");
//
x = enteredValueScreen.innerHTML;

y = finalResultScreen.innerHTML;

var one = valueOne.innerHTML;
var two = valueTwo.innerHTML;
var three =valueThree.innerHTML;
//testing if valOne is == zero
if(myVal == 'clr'){
    //clear the final result screen
    valueOne.innerHTML = 0;
    valueTwo.innerHTML =0;
    valueThree.innerHTML=0;
    finalResultScreen.innerHTML = 0;
    enteredValueScreen.innerHTML = 0;
    
  

}else{
if(one == 0){
    myVal = parseFloat(0) + parseFloat(myVal);
    //update ValOne
    valueOne.innerHTML = myVal;
    //update our screen
    enteredValueScreen.innerHTML = myVal;
}
//checking if valTwo == 0
else{
    if(two==0){
        if( (myVal=='+') || (myVal=='-') || (myVal=='*') || (myVal=='/') || (myVal=='%') ){
            //update valTwo
            valueTwo.innerHTML = myVal;
            //update Screen
            //get the old value inthe screen
            var old = enteredValueScreen.innerHTML;
            enteredValueScreen.innerHTML = old + myVal;

        }
        else{
            myVal = parseFloat(0) + parseFloat(myVal);
            //get valOne old val
            var old = one;
            //update valOne
            old = old + myVal
            valueOne.innerHTML = old;
            //update our screen
            enteredValueScreen.innerHTML = old;
        }
    }else{
    //checking valThree == 0
    if(three==0){
        myVal = parseFloat(0) + parseFloat(myVal);
        //update Val three
        valueThree.innerHTML = myVal;
        enteredValueScreen.innerHTML=one+two+myVal;
        var ans = calCulate(two,one,myVal);
    }else{
        //get old value Three
        var old = three;
        old = old + myVal;
        valueThree.innerHTML =old;
        enteredValueScreen.innerHTML = one+two+old;
        var ans = calCulate(two,one,old);
    }
    finalResultScreen.innerHTML=ans;
}

}
}


function calCulate(mySign,x,y){
    if(mySign== '+'){
        add = parseFloat(x) + parseFloat(y);
        return add;

    }
    if(mySign== '-'){
        sub = parseFloat(x) - parseFloat(y);
        return sub;

    }
    if(mySign== '*'){
        prod = parseFloat(x) * parseFloat(y);
        return prod;

    }
    if(mySign== '/'){
        div = parseFloat(x) / parseFloat(y);
        return div;

    }

    if(mySign== '%'){
        div = parseFloat(x) % parseFloat(y);
        return div;

    }
}












}

    

      

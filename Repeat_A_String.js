function repeatStringNumTimes(str,num){

    //using repeat built-in method
/*
    if(num > 0){
        return str.repeat(num);
    }else{
        return "";
    }
*/

    //using conditional Recursion
    /*
    if(num < 0){
        return "";
    }else if(num ===1){
        return str;
    }else{
        return str + repeatStringNumTimes(str,num-1);
    }
    */


    //using while loop
     var repeatedString =  "";

     while(num > 0){
         repeatedString += str;
         num--;
     }
    
     return repeatedString;

    //return ;
}


alert(repeatStringNumTimes("abc",3));

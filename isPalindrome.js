var isPalindrome = function(str) {
    
    if(str.length === 0 || str.length === 1){
        return true;
    };
    if(str[0]!==str[str.length-1]){ 
       return false ;
    }
    return isPalindrome(str.substring(1,str.length-1));


};
console.log(isPalindrome('katak'));
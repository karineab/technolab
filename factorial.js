var factorial = function(number){
    if(number===0){
        return 1
    }
    return number* factorial(number-1);
}
console.log(factorial());
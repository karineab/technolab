function countMaximumChoc(money,price, wrap){
    let choc = money/price;
    return choc + countChoc(choc, wrap);
}
function countChoc(choc,wrap){
    if(choc<wrap){
        return 0;
    }
    let newChoc=choc/wrap;
    return newChoc + countChoc(newChoc + choc % wrap, wrap);
};

// let money = 4 ; 
// let price = 1; 
// let wrap = 2;

console.log(countMaximumChoc(4, 1, 2));
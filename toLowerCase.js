var toLowerCase = function(s) {
    let returnValue="";
   for(let i=0;i<s.length;i++){
       let letter = s[i];
       if('A' <= letter && letter <= 'Z'){
           returnValue=returnValue+String.fromCharCode(letter.charCodeAt()+32);
       }
       else {
           returnValue=returnValue + letter;
       }
   }
    return returnValue;
};
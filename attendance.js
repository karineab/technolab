var checkRecord = function(s) {
    var absents=0;
    var lates=0;
    for(var i=0;i<s.length;i++){
        if(s[i] === 'L') {
            lates++;
        }
        else {
            lates = 0;
            
        }
            if (lates>=3){
            return false;
        
    }
        if(s[i] === 'A') {
                absents++;
                if(absents>=2){
                    return false;
                }
            
        } 
        
      }
    
        return true;
    }


var findMaxConsecutiveOnes = function(nums) {
    var x=0;
    var y=0;
    for(var i=0;i<nums.length;i++) {
        if(nums[i]==1){
            x++;
            y=Math.max(x,y);
        }else {
            x=0;
        }
        }
     return y;
};
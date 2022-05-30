var construct2DArray = function(original, m, n) {
    if (original.length !== (m*n)) return []
    let final = []
    let current = []
    for (let i = 0; i < original.length; i++){
        current.push(original[i])
        if (current.length === n){
            final.push(current)
            current = []
        }
    }
    return final;
};
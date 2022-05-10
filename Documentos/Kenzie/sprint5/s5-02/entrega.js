function snapCrackle(maxValue) {
    let resultado = []
    for (i=1; i<=maxValue; i++) {
    
    
        if (i % 5 === 0 && i%2 !==0) {
            resultado.push("SnapCrackle")
        }
        else if (i %2 !== 0) {
            resultado.push("Snap")
        }
        else if (i % 5 ===0) {
            resultado.push("Crackle")
        }
        else if (i % 5 !== 0 && i % 2 ===0) {
            resultado.push(i)
        }
    
    }
    return resultado.join(", ")
} 


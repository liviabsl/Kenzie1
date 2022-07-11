function positions(firstPlace, secondPlace, lastPlace) {
    let posicaoArray =[firstPlace, secondPlace, lastPlace]

    if ("Daniel" == posicaoArray[0]){
        console.log(firstPlace + " 1º lugar")
        console.log(secondPlace + " 2º lugar")
        console.log(lastPlace + " 3º lugar")
    
    } else if ("Daniel" == posicaoArray[1]) {
        console.log(secondPlace + " 1º lugar")
        console.log(firstPlace + " 2º lugar")
        console.log(lastPlace+" 3º lugar")
        
    } else if ("Daniel" == posicaoArray[2]) {
        console.log(firstPlace+ " 1º lugar")
        console.log(lastPlace + " 2º lugar")
        console.log(secondPlace + " 3º lugar")
    }

}
    positions("Rafael","Daniel", "Manoel")


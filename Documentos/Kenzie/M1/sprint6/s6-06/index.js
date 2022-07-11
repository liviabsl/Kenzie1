/*function analyticsData(nome, datas) {
    let datas = ["João", "Matheus", "Julia", "Lucas", "Carlos"]
    let nome = "Pedro"

    let datasStr = datas.join(", ")
    console.log(datasStr)

    let inclui = datas.includes("Pedro")

    console.log(inclui)

    }*/

    function plural (palavra) {
        let array = []
        for (let i = 0; i<palavra.length; i++) {
            if (palavra[i].length % 2 === 0) {
                array.push(palavra[i])
            }

        }
        console.log(array)
        let juntar = array.join(" ")
        console.log(juntar)
            let separar = juntar.split("")
            console.log(separar)

            for (i=0; i<juntar.length; i++) {
                if (separar[i] == "i") {
                    separar[i] = "!"
                }
            }
            console.log(separar.join(""))

    }
plural(["carla", "adriano", "line", "marasi"])



/*for (let i = 0; i<palavra.length; i++) {
    if (palavra[i] === "i") {
        palavra[i] = "!"
    }
    console.log(palavra)

}   
console.log(palavra)*/


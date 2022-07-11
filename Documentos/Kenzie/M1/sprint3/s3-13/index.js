/*let myArr = [5,10,20,10,20]
let soma = 0
for (let i = 0; i<myArr.length; i++) {
  soma += myArr[i]
}  
console.log(myArr)
console.log(soma)*/

/*let Array = [5, 4, 7, 30, 16, 89]
for (let i = 0; i<Array.length; i++){
    if (Array[i]%2==0) {
        console.log(Array[i])
    }

}*/

let array = [1, '4', 9, 18]
let soma=0
for (let i = 0; i < array.length; i++) {

    if (array[i]!== Number) {
        console.log(array[i]=parseInt(array[i]))
        
        
    }
    
soma += array[i]

}console.log(soma)

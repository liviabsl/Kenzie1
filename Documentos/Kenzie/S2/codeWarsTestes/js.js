var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

  list1.forEach(element => {
    let contadora = 0
    if (element.continent == "Europe" && element.language == "JavaScript"){
        contadora+=1
        if (contadora = 0){
            return 0
            
        }
        else if (contadora = 1){
            return contadora ," ", element.firstName , "is the only JavaScript developer from Europe"
        }
    }
  })





  function countDevelopers(list) {
    list.forEach(element => {
     let contadora = 0
     if (element.continent == "Europe" && element.language == "JavaScript"){
         contadora+=1
         
         if (contadora = 1){
             return contadora ," ", element.firstName , "is the only JavaScript developer from Europe"
         }
     else{
       return 0
     }
     }
   })
 }







 
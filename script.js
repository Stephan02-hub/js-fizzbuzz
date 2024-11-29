//crea un ciclo che va da 1 a 100
for(let i = 1; i<=100; i++){
    //se il numero è divisibile per 3
    if(i % 3 === 0 && i % 5 === 0){
        console.log("frizzbuzz")
    }//altrimenti s'è divisbile per 5
    else if (i % 5 === 0){
        console.log("buzz")
    }//altrimenti s'è divisibile sia per 3 che per 5
    else if (i % 3 === 0){
        console.log("frizz")
    }// se  non è disvisibile sia per 3 che per 5
    else{
        console.log(i)
    }
}
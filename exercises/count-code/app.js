let arr = ["code", "code", "cool"]


function countCode(arr){
    let count = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] === 'code'){
            count+=1
      }
  }return count
}
console.log(countCode(["code", "code", "cool"]))
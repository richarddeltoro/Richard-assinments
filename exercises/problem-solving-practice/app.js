
function largest(arr){
    let bigger = arr.sort(function (a, b){
        return b -a 
    })
    return bigger
}

console.log(largest([3, 1, 30, 5, 100]))




function twoSrtring(str){
    let cutt = str.slice(1, 3)
    let splitIt = str.split("h")
    return splitIt + cutt + str.toLowerCase(str) + str.toUpperCase(str) 
}

console.log(twoSrtring("hello"))


function findMiddleIndex(str){
    //hello
    //half of hello's length is ...
    //round down to the nearest whole number
    //return number
    return  Math.floor(str.length / 2)
}

console.log(findMiddleIndex("hello"))



function firstHalf(str){
    let doMath = Math.floor(str.length / 2 )

    let firstSplit = str.slice(0, doMath);
    let cap = firstSplit.toUpperCase(str);

    let secondSplit = str.slice(doMath, str.length);
    let lower = secondSplit.toLowerCase(str)

    let putTogether = cap.concat(lower)
    return putTogether
}

console.log(firstHalf("hello World"))


function lastAssinment(str){   //str= "Yellow there fellow can you tell me what time is it ?"
    let words =  str.split(" ") // words = [ 'Yellow','there','fellow','can','you','tell','me','what','time','is','it','?' ]
    for(let i = 0; i< words.length; i++){
        let grabber = words[i].slice(0,1) //grabber = Y t f c yt m w t i i ?
        let capitol = grabber.toUpperCase() //capitol = Y T F C Y T M W T I I ?
        let therest = words[i].slice(1)  // therest = ellow here ellow
        let all = capitol.concat(therest)//  Yellow There Fellow Can You Tell Me What Time Is It ?
        console.log(all)
    }
   
    
}





console.log(lastAssinment("Yellow there fellow can you tell me what time is it ?"));
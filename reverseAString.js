
function reverseWord(str){
    //Your code here
    let reversedArr = [];
    let a = str.split("");
    for(let i = a.length; i>=0; i--){
        reversedArr.push(a[i])
    }
    return reversedArr.join("")
}

reverseWord("Geeks");
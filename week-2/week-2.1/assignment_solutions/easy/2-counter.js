// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// First Approach
let start = 0; // in seconds
let end = 10;
function getTime(){
    console.log(start++)
    if(start >= end+1){
        return;
    }
    setTimeout(getTime, 1000)
}
getTime()

// Second Apporach
// let start = 0; 
// let end = 10;
function getTime(){
    return new Promise((resolve, reject) => {
        if(start<=end){
            console.log(start++)
            setTimeout(getTime, 1000)
        }else{
            resolve("Finished")
        }
    })
}
getTime().then((res) => console.log(res))



console.log("szeva");
/**
 * @type{string}
 */
const szo = "hello";
console.log(szo);
/**
 * @type{string[]}
 */
const arr = ["szia","hello","szevasz"];
console.log(arr[0]);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

for(const a of arr){
    console.log(a)
}

for(const key in arr){
    console.log(`${key}:${arr[key]}`);
}

/**
 * @type{{nev: string, age: int}}
 */
const a = {
    nev: `akos`,
    age: 18
}
console.log(a)



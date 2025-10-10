const obj = {}
const szam = 1
if (szam > 5){
    obj.name = "kjkkAAAA" 
}
else{
    obj["name"] = "c"
}
console.log(obj)

console.log(obj["name"])

if(obj.age == null){
    console.log("igaz")
}
if(obj.age === null){
    console.log("hammis")
}
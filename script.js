// json comparison:
let obj1 = {name:"person1", age:5};
let obj2 = {age:5 , name:"person1"};
 if (JSON.stringify(obj1) === JSON.stringify(obj2) ) 
{console.log("json1 is equal to json2")} 
 else {console.log("json1 is not equal to json2")} 
 ;


// REST COUNTRIES flags:

let req =new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    let data = req.response;
   let nations=  JSON.parse(data)
   for(let i in nations){
console.log(nations[i].flags); }
}

// // REST COUNTRIES NAMES:

let req2 =new XMLHttpRequest();
req2.open("GET","https://restcountries.com/v3.1/all");
req2.send();
req2.onload=function(){
    let data2 =req2.response;
    let nationS=  JSON.parse(data2);
    for(let j in nationS){
       console.log(nationS[j].name);
}
}

// // RESTCOUNTRIES REGIONS:

 let req3 =new XMLHttpRequest();
 req3.open("GET","https://restcountries.com/v3.1/all");
 req3.send(); 
 req3.onload=function(){
let data3 =req3.response;
 let NationS=  JSON.parse(data3);
for(let l in NationS){
console.log(NationS[l].region);}
 };

// // REST COUNTRIES SUB-REGIONS:

let req4 =new XMLHttpRequest();
req4.open("GET","https://restcountries.com/v3.1/all");
req4.send(); 
req4.onload=function(){
let data4 =req4.response;
let NAtionS=  JSON.parse(data4);
for(let K in NAtionS){
console.log(NAtionS[K].subregion) }
};

// // REST COUNTRIES POPULATION:

let request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
    let DATA = request.response;
    let NATIONS = JSON.parse(DATA);
    for(let t in NATIONS){console.log(
 `${NATIONS[t].name.common} : ${NATIONS[t].population}`);}
}
function foo(x = 0, y = 0){

}

function foo2(x = p +1){

}

const obj = {
    a: "1",
    b: '2'
}

for(let [key , value] of obj){
    console.log(`key is ${key}, value is ${value}`);
}
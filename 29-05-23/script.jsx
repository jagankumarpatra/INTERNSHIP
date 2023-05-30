let a=10;
console.log(a);
var b=10;
console.log(b);
b=12;
console.log(b);
a=11;
console.log(a);
const d=12;
console.log(d);
// d=13;
// console.log(d);

function f1(a,b) {
    if(a>b){
        console.log(a+b);
    }
    else{
        console.log(b-a);
    }
}
f1(2,3);

// var array=[1,2,3,4,5];
// for(var i=0;i<array.length;i++){
//     if(i%2!=0){
//         console.log(array[i]);
//     }
// }
// var i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// array.push(67);
// array.pop(67);
// console.log(array);


var arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
for(var j=0;j<arr.length;j++){
    if(arr[j]%2==0){
        console.log(arr[j]);
    }
}

var are=[1,2,3,4,5,6,7,8,9,10];
console.log(are);

for(var i=0;i<are.length;i++){
    var b=true;
    for(var j=2;j<i;j++){
        if(are[i]%2==0){
            b=false;
            break;
        }
    }
    if(b){
        console.log(are[i]);
    }
    
}

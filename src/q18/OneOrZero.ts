const size = Number(process.argv[2]);

for(let i = 0; i < size; i++){

let row = "";
if(i % 2 === 1){  //jst checking odd or even then if-else same-same

for(let j = 0; j < size; j++){

row += "0" 

}

}else{

for(let j = 0; j < size; j++){

row += "1" //The first line

}

}

console.log(row);

}


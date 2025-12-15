const number = Number(process.argv[2]);

for(let x = 0; x <= number;x+= 2){

if(Number(isNaN(x))){

break;

}else{

console.log(x);

}

}
let max = Number.NEGATIVE_INFINITY;

for(let x = 2; x < process.argv.length; x++){

const num = Number(process.argv[x]);

if(num > max){

max = num;

}

}
console.log(`${max}`);
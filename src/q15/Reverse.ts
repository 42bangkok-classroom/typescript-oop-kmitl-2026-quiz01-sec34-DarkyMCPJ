const input = process.argv[2];

let reversed = "";

for(let x = input.length-1; x>=0; x--){

reversed += input[x];

}

console.log(reversed)

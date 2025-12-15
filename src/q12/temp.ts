const temp = Number(process.argv[2]);

if(isNaN(temp)){
console.log("Invalid");
}
else if(temp > 30)
  console.log("Hot");
else if(temp <= 30)
  console.log("Normal");
else
  console.log("Invalid");
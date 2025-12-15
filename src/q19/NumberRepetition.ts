
const size = Number(process.argv[2]);

if (isNaN(size) || size <= 0) {
  console.log("Please provide a positive number."); //Not neccessary but can be include
  process.exit(1);
}

for (let i = 1; i <= size; i++) {           //<= instead of <
  console.log(String(i).repeat(size));      //Strings bc repeat only working on strings
}

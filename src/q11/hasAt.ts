const strings = process.argv[2];
if(strings && strings.includes ("@"))
  console.log("Has @");
else
  console.log("No @");

const password = process.argv[2];

let hasNumber = false;
let hasUppercase = false;
let hasLowercase = false;

if (!password || password.length < 8) {
  console.log("Invalid");
  process.exit(0);
}

for (let i = 0; i < password.length; i++) {
  const char = password[i];
  const code = char.charCodeAt(0);

  // number 0–9
  if (code >= 48 && code <= 57) { 
    hasNumber = true;
  }

  // uppercase A–Z
  if (code >= 65 && code <= 90) { 
    hasUppercase = true;
  }
  // lowercase a-z
  if (code >= 97 && code <= 122) { 
    hasLowercase = true;
  }

}

if (hasNumber && hasUppercase && hasLowercase) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

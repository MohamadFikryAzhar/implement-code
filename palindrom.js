function isPalindrome(string) {
  string = string.replace(/ /g, "").toLowerCase();
  const reversedString = string.split("").reverse().join("");
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

const inputString = "level";

if (isPalindrome(inputString)) {
  console.log("String adalah palindrom.");
} else {
  console.log("String bukan palindrom.");
}

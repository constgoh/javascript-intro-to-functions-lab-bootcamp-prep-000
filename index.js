function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log()
  return string.toUpperCase
}

function logWhisper(string) {
  console.log()
  return string.toLowerCase
}

var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase
var lowercase = "hello"
lowercase.toLowerCase() === lowercase // true
var mixedCase = "Hi there"
 
 function sayHiToGrandma(string) {
  if ((string)===uppercase) {
    return 'YES INDEED!'
  }
  else if ((string)===lowercase) {
    return "I can't hear you!"
  }
  else if ((string)==="I love you, Grandma.") {
    return "I love you, too."
  }
}
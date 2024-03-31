const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function generatePassword() {
    let pass = ""
    for (let i = 0; i < 15; i++) {
        pass += characters[getRandomIndex()]
    }
    // console.log(pass)
    return pass
}

const genButton = document.getElementById("gen-btn")
let passEl1 = document.getElementById("pass-el1") 
let passEl2 = document.getElementById("pass-el2") 

genButton.addEventListener("click", function() {
    passEl1.textContent = ""
    passEl2.textContent = ""
    let output1 = generatePassword()
    let output2 = generatePassword()
    passEl1.textContent += output1
    passEl2.textContent += output2  
})

function copyText1() {
    // Get the text field
  var copyText = passEl1

  // Select the text field
//   copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent);

  // Alert the copied text
  alert("Copied the text: " + copyText.textContent);
}

function copyText2() {
    // Get the text field
  var copyText = passEl2

  // Select the text field
//   copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent);

  // Alert the copied text
  alert("Copied the text: " + copyText.textContent);
}
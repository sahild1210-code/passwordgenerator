const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symboleSet = "~!@#$%^&*()_+/"


// selectors
const passwordBox = document.getElementById('pss-box');
const totalchar = document.getElementById('total-char');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('number');
const symbolInput = document.getElementById('symbols');

const getRendomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
    
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRendomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRendomData(lowerSet)
    }
    if(numberInput.checked){
        password += getRendomData(numberSet)
    }
    if(symbolInput.checked){
        password += getRendomData(symboleSet)
    }
    if(password.length < totalchar.value){
        return generatePassword(password)
    }
   passwordBox.innerText = password.slice(0, totalchar.value);
    
    
}
generatePassword();
document.getElementById('btn').addEventListener("click", function()
{
    generatePassword();
})



 
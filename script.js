
const result = document.getElementById("result")
function conversionUnit(){
let celsius =document.getElementById("inputBox").value;
if(isNaN(celsius)){
    alert("Please enter number")
    return
}
let fehrenheit = (celsius*9/5)+32;
result.innerText = fehrenheit + `\u{2109}`

}
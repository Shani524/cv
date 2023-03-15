let fruits=["apple","orange","apple","apple","orange","apple","apple","orange"]
let appleEl=document.getElementById("apple-el")
let orangeEl=document.getElementById("orange-el")
function getFruits() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i]==="apple") {
             appleEl.textContent += "apple"+" "
        }else if (fruits[i] === "orange") {
             orangeEl.textContent += "orange"+"  "
        }
        
    }
}

getFruits()
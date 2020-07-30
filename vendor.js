//affecting button
const feelingBtn = document.getElementById("feeling-btn")
//feeling status
const feelingDegree = document.getElementById("feeling-degree")

const feeling = document.getElementById("feeling")

//background
const feelingColor = document.querySelector("body")



function changeColor(text){
    feelingColor.style.background = text
    feeling.style.color = text
}

function showDegree(result, text) {
    feelingDegree.textContent = result
    feeling.textContent = text
}
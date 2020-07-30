
const defaultDegree = 0
let currentDegree = defaultDegree

const defaultFeeling = "no feeling"
let currentFeeling = defaultFeeling
//



function affectHandler() {

    currentDegree++
    currentFeeling = "so so"
    currentColor = ""
    
    if (currentDegree >=10) {
        currentFeeling = "uncomfortable"
        currentColor = "rgba(100,100,0,30)"
    } else if (currentDegree >=20) {
        currentFeeling = "confused"
        currentColor = "rgba(200,100,0,30)"
    } else if (currentDegree >=30) {
        currentFeeling = "angry"
        currentColor = "rgba(220,0,0,80)"
    }
    changeColor(currentColor)
    showDegree(currentDegree, currentFeeling)
}



feelingBtn.addEventListener("click", affectHandler)



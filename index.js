let data = new Date();
let database = [
    { text: "Kir yuvish", time: "21.03" },
    { text: "Tv ko`rish", time: "21.03" },
    { text: "Dars qilish", time: "21.03" }
]

// console.log(`Soat ${data.getHours()}:${data.getMinutes()}`);

function rendered (array) {
    document.querySelector("ul").innerHTML = null    
    for(let element of array){
        let newLi = document.createElement("li")
        let newP = document.createElement("p")
        let newTime = document.createElement("time")
        let newDiv = document.createElement("div")
        let newInput = document.createElement("input")
        let newBtn = document.createElement("button")
    
        newP.textContent = element.text
        newTime.textContent = element.time
        newInput.setAttribute("type","color")
        newBtn.textContent = "X"
    
        document.querySelector("ul").prepend(newLi)
        document.querySelector("li").prepend(newP)
        document.querySelector("li").appendChild(newTime)
        document.querySelector("li").appendChild(newDiv)
        document.querySelector("div").appendChild(newInput)
        document.querySelector("div").appendChild(newBtn)
    
        
        newBtn.addEventListener("click", () => {
            newLi.remove();
            database.pop();
        })
    
        newInput.addEventListener("change", () => {
            newLi.style.backgroundColor = newInput.value
            newLi.style.color = "white"
        })
        
    }
}

rendered(database)

let addInput = document.querySelector("input")
let addBtn = document.querySelector("button")

addBtn.addEventListener("click", () => {
    if(addInput.value !== ""){
        let addText = addInput.value
        let addTime = `${data.getHours()}:${data.getMinutes()}`
        let addObject = {text: addText, time: addTime}
        database.push(addObject)
        rendered(database)
        addInput.value = null
    }
})



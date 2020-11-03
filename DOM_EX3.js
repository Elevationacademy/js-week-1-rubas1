const list = document.getElementById("container")
const addItem = function () {
    for(let i=0;i<6;i++){
    const newItem = document.createElement("b"+i)
    newItem.setAttribute("boxes", "boxes");
    list.appendChild(newItem)
    }
}
addItem()
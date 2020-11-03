const box = document.getElementById("block")
const downArr = document.getElementById("down")
downArr.onclick = function () {
    let num = parseInt(box.style.top) || 0
    num += 15
    let str = num + "px"
    box.style.top = str
}
const upArr = document.getElementById("up")
upArr.onclick = function () {
    let num = parseInt(box.style.bottom) || 0
    num += 15
    let str = num + "px"
    box.style.bottom = str
}
const leftArr = document.getElementById("left")
leftArr.onclick = function () {
    let num = parseInt(block.style.right) || 0
    num += 15
    block.style.right = num + "px"
}
const rightArr = document.getElementById("right")
rightArr.onclick = function () {
    let num = parseInt(box.style.left) || 0
    num += 15
    let str = num + "px"
    box.style.left = str
}
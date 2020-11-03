const reservations = {
    Bob: { claimed: false},
    Ted: { claimed: true }
}
const arr = Object.keys(reservations)
console.log(arr)
const but = document.getElementById("check")
but.onclick = function (){
    const name = document.getElementById("name").value
    let exist = false
    for(let person of arr ){
        if(person == name){
            if(reservations[person].claimed == true){
                console.log("already claimed!")
                exist = true
            }
            else{
                console.log("welcome, " + name)
                exist = true
            }
        }
    }
    if(exist == false){
         console.log("there is no reservation under the name: " + name)
    }
}
////////////Exercise 1////////////
let numChildren = 3
let isCareful = true
if(!isCareful){
    numChildren++
}
console.log(numChildren)

////////////Exercise 2////////////
let silverwareCount = 4
if(silverwareCount%2==1){
    console.log("there is something missing")
}

////////////Exercise 3////////////
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if(performance=="stellar"){
    salary += stellarBonus
}else{
    salary += goodBonus
}
console.log(salary)

////////////Exercise 4////////////
const isVIP = false
let cash = 500
if(isVIP || cash>=300){
    console.log("welcome to the club ")
}else{
    console.log("sorry you can't enter :( ")
}

////////////Exercise 6////////////
const gender = null
let profession = "business"
if(gender != null){
    if(gender == "male"){
        console.log("businessman")
    }
    if(gender == "female"){
        console.log("businesswoman")
    }
} else{
    console.log("null")
}

////////////Exercise 7////////////
let boughtTesla = true
const yearOfTeslaPurchase = 2017
let isUSCitizen = false
let currentYear = 2018
if(boughtTesla==true && isUSCitizen==true){
    if(currentYear-yearOfTeslaPurchase>=4){
        console.log("Do you like to upgrade?")
    }
    else{
        console.log("Are you satidfied?")
    }
}else{
    if(boughtTesla==true){
        console.log("Would you like to move to US?")
    }
    else{
        console.log("Are you interested in buying a Tesla?")
    }
}

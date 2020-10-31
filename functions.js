/////////////Exercise 1/////////////
const Age = function(currentYear , birthYear){
    return (currentYear-birthYear)
}
console.log(Age(2017,1989))

/////////////Exercise 2/////////////
const Age_2 = function(currentYear , birthYear){
   const age1 = Age(currentYear , birthYear)
    return [age1 , age1-1]
}
const ages = Age_2(2017,1989)
console.log("You are either " + ages[0] + " or " + ages[1])

/////////////Exercise 3/////////////
const isEven = function(number){
    if(number%2==0){
        return true
    }else{
        return false
    }
}
console.log(isEven(78))

/////////////Exercise 4/////////////
const oddNums = function(array){
    for(let num of array){
        if(isEven(num)==false){
            console.log(num)
        }
    }
}
let arr = [1,4,55,6,3,22,87,8]
oddNums(arr)

/////////////Exercise 5/////////////
const isExist = function(arr , num){
    for(let i of arr){
        if(i==num){
            return true
        }
    }
    return false
}
console.log(isExist(arr,100))

/////////////Exercise 6/////////////
const calculator = {
add : function(num1, num2){
    return num1 + num2
},
 sub : function(num1, num2){
     return num1 - num2
 }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.sub(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

/////////////Exercise 7/////////////
const increaseByNameLength = function(money, name){
   return money += (name.length-1)*100
}
const makeRegal = function(name){
   return "His Royal Highness, " + name
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}
turnToKing("martin luther", 100) 


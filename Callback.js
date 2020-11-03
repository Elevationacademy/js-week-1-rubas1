////////////Exercise 1////////////
const push = function () {
    console.log("pushing it!")
}
  
const pull = function () {
    console.log("pulling it!")
}

const pushPull = function (myfunc){
    myfunc()
}
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

////////////Exercise 2////////////
const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
const getTime = function (myfunc){
    const time = new Date()
    myfunc(time)
}
  getTime(returnTime)

////////////Exercise 4////////////
const sum = (a,b,c) => a+b+c
console.log(sum(2,4,6))

////////////Exercise 5////////////
const capitalize = (str) =>{
    let res =""
    res = res + str[0].toUpperCase()
    for(let i=1;i<str.length;i++){
    res = res + str[i].toLowerCase()
    }
   return res
}
console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

////////////Exercise 3////////////
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
const logData = function(data){
    console.log(data)
}
displayData(alert, logData, "I like to party")

////////////Exercise 6////////////
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
const commentOnWeather = (temp) => console.log("it's " + determineWeather(temp))
commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

////////////Exercise 7////////////
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")
  const run = (name) => {console.log("Run, " + name + ", run!")}
  const yell = function(action){
      let env = "Forest"
      action(env)
  }
  run(yell)

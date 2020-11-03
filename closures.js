///////////Exercise 1///////////
const StringFormatter = function (){
    const capitalizeFirst = function (str){
        let res = ""
        res = res + str[0].toUpperCase()
        for(let i=1;i<str.length;i++){
            res = res + str[i].toLowerCase()
        }
    return res
    }
    const skewerCase = function (str){
        let res = ""
        for(let i=0;i<str.length;i++){
            if(str[i]==' '){
                res = res + '-'
            }else{
                res =res + str[i]
            }
        }
    return res
    }
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}
const formatter = StringFormatter()
console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box

///////////Exercise 2///////////
const Bank = function(){
    let money = 500
    const depositCash = function(cash){
        money += cash
    }
    const checkBalance = function(){
        console.log(money)
    }
    return{
        deposit: depositCash,
        showBalance: checkBalance
    }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
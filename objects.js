////////////////////Exercise 1////////////////////
let p1 = {
    name: "Jill",
    age: 25,
    city: "Haifa"
}

let p2 = {
    name: "Robert",
    age: 25,
    city: "Haifa"
}

if(p1.age==p2.age){
    if(p1.city==p2.city){
        console.log("Jill wanted to date Robert")
    }
    else{
        console.log("Jill wanted to date Robert,  but couldn't")
    }
}

////////////////////Exercise 2////////////////////
const MyList = [{name: "name1", age: 13, city: "Haifa"},  {name: "name2",
     age: 23, city: "Tel Aviv"}]
MyList[0].age = 20
MyList.splice(1,1)

////////////////////Exercise 3////////////////////
const List = [{name: "name2", age: 21, city: "Milano"}, {name: "name3",
    age: 32, city: "New York"}]
MyList.push(...List)

////////////////////Exercise 3////////////////////
let library = {
     books: [{title: "t1", auther: "a1"}, {title: "t2", auther: "a2"},
     {title: "t3", auther: "a3"}]
}
MyList.push(...library.books)
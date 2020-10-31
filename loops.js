////////////////Exercise 1////////////////
let name = ["name1","name2","name3","name4"]
let ages = [13,42,55,61]
for(let i=0;i<4;i++){
    console.log(name[i] + " is " + ages[i])
}

////////////////Exercise 2////////////////
let numbers = [1,4,18,2,66,7,87,54]
let sum = 0
for(let i=0;i<numbers.length;i++){
    sum += numbers[i]
}
console.log("the total sum is: " + sum )

////////////////Exercise 3////////////////
let avg=sum/numbers.length
console.log("the average is: " + avg)

////////////////Exercise 4////////////////
let nums = []
for(let i=1;i<101;i++){
    nums.push(i)
}
console.log(nums)

////////////////Exercise 5////////////////
for(let i in nums){
    if(i%2==1){
        console.log(i)
    }
}

////////////////Exercise 6////////////////
let nums_2 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 
    198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 
    715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 
    724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159,
     229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 
     271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 
     785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 
     817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for(let i=0;i<nums_2.length;i++){
    if(nums_2[i]==709){
        console.log("the index os 709 is: " + i)
    }
}

////////////////Exercise 7////////////////
const names = ["Ashley", "Donovan", "Lucas"]
const ages_2 = [23, 47, 18]
const people = []
for(let i=0;i<3;i++){
    people.push({name: names[i], age: ages_2[i]})
}
console.log(people)

////////////////Exercise 8////////////////
for(let i of people){
    console.log(i.name + " is " + i.age + " years old")
}

////////////////Exercise 9////////////////
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for(let i of posts){
    if(i.id==2){
        posts.splice(i,1)
    }
}
console.log(posts)

////////////////Exercise 10////////////////
const posts_2 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  for(let i in posts_2[1].comments){
      if(posts_2[1].comments[i].id==3){
          posts_2[1].comments.splice(i,1)
      }
  }
  console.log(posts_2[1].comments)

  ////////////////Exercise Extension////////////////
  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  let keys = Object.keys(dictionary)
  let values = Object.values(dictionary)
  for(let i in keys){
      console.log("Words that begin with " + keys[i] + " :")
      for(let j of values[i]){
          console.log(j)
      }
  }
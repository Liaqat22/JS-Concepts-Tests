console.log("hi this is a pull request test")


// ReverseArray
const reverseary =(ary)=>{
  const aryget = []
for(let i = ary.length-1 ; i>0 ; i--){
  const data = ary[i]
  aryget.push(data)
}
return aryget
}
const  num = [1,2,4,6,9,55] 
console.log(reverseary(num) , "reverse") //[ 55, 9, 6, 4, 2 ] reverse

// WordCounter
const Wordcounter = (str) =>{
  const word = str.split(" ")
  const words = word.reverse().join(" ") //ali liaqat am i hi
  console.log(words)
  return words.length
}
const string = "hi i am liaqat ali"
console.log(Wordcounter(string)) //5

//Removing duplicates 
function RemoveDplts(arry){
  const res = arry.filter((value , index)=>{
    return arry.indexOf(value) === index
  })
  console.log(res)
}
const arry = [1,2,3,4,5,8,4,4,6]
RemoveDplts(arry)

//Adding newvalue in Arry
const newArray = (arry ,newvalue) =>{
const newentry = [...arry,newvalue]
return newentry
}
const value = [22,32,54545,656,66]
const newvalue = 100
console.log(newArray(value,newvalue))

   const a = [ 1,2,3,4]
    const b = a.find(v => v === 4 ) // return output as in object 4
    const c = a.filter(v => v === 4 ) // return  object as in array [4]
    const d = a.reduce((v,v1) =>v+v1 ) // return output as in object 10
    console.log ("find" , b ) // 4
    console.log ("filter", c) // [4]
    console.log ("reduce" , d) // 10

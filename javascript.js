// let welcome = document.getElementById("one").innerText = "hello"


// console.log(typeof(part))

// console.log(welcome)


// let colors = ["red","green","blue"];
// console.log(colors[2])


// to check the lenght of a strring

// let joke = "sometimes jokes is good "

// let bee=joke.length
// console.log(bee)




// to check the lenght of an array


// let animals = ["cat","rabbit","dog","hen"]

// let len = animals.length-1
// console.log(len)
// console.log(animals[animals.length-3])





// conditional statement


// let happy = "yes am happy"


// if(happy){
//     console.log("i highly happ")
// }
// else{
//     console.log("badd mood")
// }


// let red = "This is color red";
// let blue = "This is color blue"
// let green =1;

// if(!red){
//     console.log("yessssssssssssss")
// }
// else if(green){
//     console.log("its green")
// }
// else{
//     console.log(blue)
// }



// comparing value in javascript

// let red = "This is color red";
// let blue = "This is color blue"
// let green =1;

// let firstNum =5
// let secondnum  = 5

// if(firstNum == secondnum){
//     console.log("yesss its  saame")
// }
// else{
//     console.log("not same")
// }






// let arr = ["red","blue","green","yellow"]
// let selectedarr = arr[3];

// if(selectedarr === "red"){
//     console.log(arr[3])
// }
// else if (selectedarr === arr[2]){
//     console.log(arr[2])
// }
// else{
//     console.log(arr[3])
// }


// if(selectedarr === "red"){
//     console.log("its red")
// }
// else if(selectedarr === "blue"){
//     console.log("its blue")
// }
// else{
//     console.log("its yellow")
// }

// let goodMood = true
// let goodsleep = false

// if(goodMood || goodsleep){
//     console.log("I am happy")
// }
// else {
//     console.log("I am sad")
// }



// loop in javascript



// for(let i = 2 ;i<=10;i++){
//     console.log(i)
// }




let colors = ["red","green","blue","yellow","black","orange"];
// for(let i = 0; i<4; i++){
//     console.log(colors[i])]
// }

// for(let i = 0; i<colors.length; i++){
//     console.log(colors[i])
// }

// for(let i = 0;i<=colors.length;i++)(
//     console.log(`The colors are ${colors[i]}`)
// )

// for(let color of colors){
//     console.log(color)
// }
// for(let color of colors){
//     console.log(`The colors are ${colors}`)
// }


// let myStrings = "welcome Ramamdan"
// let count = myStrings.length
// console.log(count)

// for(let i =0; i<myStrings.length; i++){
//     console.log(myStrings[i])
// }


let myStrings = "welcome Ramamdan"
// console.log(myStrings.toUpperCase()) touppercase
// console.log(myStrings.toLowerCase()) tolowercase
// console.log(myStrings.search('Ramamdan')) search for a word
// console.log(myStrings.substring(5)) substring
// console.log(myStrings.replace('welcome','goodbye '))word replacement




let foodarray  = ["Rice","beans","bread","Amala","moimoi","custard"];
//  for(food of foodarray){
//     console.log(`The list of food are ${food}`)
//  }


// for(let i = 0; i<foodarray.length; i++){
//     console.log(`The list of food are ${foodarray[i]}`)
// }

// for(let i = 0;i<foodarray.length;i++){
//     const remainder = i%2
//     if(remainder === 0){
//         console.log(foodarray[i].toUpperCase())
//     }
//     else{
//         console.log(foodarray[i])
//     }
// }


// let num = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i<100; i++){
//     let rem = i %2
//     if(rem === 0){
//      console.log(i)
//     }
//     else{
//         console.log(rem == 1)
//     }
// }


// function doSomething(){
//     let toCap = "Ramadan"
//    let thecap= toCap.toUpperCase()
//     console.log(thecap)
// }

// doSomething()


// function checknum(){
//     let userNum = prompt("enter a whole num")

//     if(userNum <10){
//         for(let i = 0; i<10; i++){
//             console.log(i)
//         }
//     }
//     else if(userNum > 9){
//         console.log("you entered a big num ")
//     }
//     else{
//         console.log("error")
//     }
// }

// checknum()




// ***************function project********************

// function Thenums(){
//     let num = prompt("enter ur nums")
  

//     if(num <10){
//         for(let i = 0; i<10; i++){
//             console.log(i)
//         }
//     }
//     else if(num >9){
//         console.log("you enter a num greater than 10")
//     }
   
//     else{
//         console.log("error: u didnt enter anum")
//     }
// }
// Thenums()


// function message(mess){

//     let text = mess.toUpperCase()
//     console.log(text)
// }

// message("this is an uppercase")

// let shawal = "tomorow is eld"
// function eldDay(eldText){
//     let eld = eldText

//     return eld
// }
// console.log(eldDay(shawal))

// function sum(a,b){
//     let add = a+b
//     return add
// }

// console.log(sum(4,6))

// console.log(Math.floor(Math.random()* 3))

// let rand = Math.random()
// console.log(rand)


// function Intnum(max,min){
//     let int = max- min +1
//     return int
// }
// console.log(Intnum(10 ,6))





// function checkrad(max, min){
//     let theNum = max + min +1

//     let randnum = Math.random()

//     let Thetotal = theNum  * randnum

//     let floorNum =  Math.floor(Thetotal)
//     return floorNum
// }
// console.log(foodarray[checkrad(3,1)])


// let greeting = function(){
//     let name = prompt("enter ur name")
   
//     if(name== "arise"){
//       console.log("Thats my name")
//     }
//     else{
//         console.log("not my name")
//     }
// }

// greeting()



// let welcome =document.getElementById("one").innerText = "Eld Mubarack"
// console.log(welcome)


let hs = document.getElementsByTagName("h2")

// for(let i =0; i<hs.length; i++){
//    hs[i].style.color = "red"
//    prompt(console.log(i))
// }
// for(let hss of hs){
//    hss.style.color ="blue"
//    prompt(console.log(hss))

// }



// myDiv = document.getElementById("special")
// myDiv.innerHTML = "I am a nice guy"



// myCheckbox = document.querySelector("input")
// myCheckbox.setAttribute("checked", "checked")


// let myTag = document.createElement("p")
// let newText = document.createTextNode("This is my new text created with Mytag")
// myTag.appendChild(newText)

// myhtmlDiv = document.querySelector("div")
// myhtmlDiv.appendChild(myTag)



// let myPTag = document.createElement("p")
// let theText = document.createTextNode("The is the new Text")
// myPTag.appendChild(theText)

// let theDiv = document.querySelector("div")
// theDiv.appendChild(myPTag)



// let myremove = document.querySelector("div")
// myremove.removeChild(myremove.children[2])



let btn = document.querySelector("button")
// btn.addEventListener("click" , function(){
//    // alert("i said dont click me")

//    console.log("dont click me")
// })






// function ouch(){
//    // console.log("i was click")
//    alert("i said dont click me")
// }
// btn.onclick = ouch
   

// btn.addEventListener("click", function(e){
//    e.target.style.color = "red"
//    // alert("dont press me")
//    // console.log("dont click me")
// })


let link = document.querySelector("a")

// link.addEventListener("click",function(e){
//    e.preventDefault()
//    console.log("no google for you")
// })
     



// let myForm = document.querySelector("form")

// myForm.addEventListener("submit", function(e){
//     e.preventDefault()
//     let formData = document.querySelector("input").value
//     console.log(formData)
// })

// function testscope(){
//     global = "whats this "
//     var aVariable = "local scope"
//     return aVariable
// }

// console.log(testscope())
// console.log(global)

// let ps = document.querySelectorAll("p")


// for(let i =0; i<ps.length; i++){
//     ps[i].style.color = "blue"
// }

// for(let pees of ps){
//     pees.style.color = "blue"
// }

// (function(){

//     let ps = document.querySelectorAll("p");
//     for(let i =0; i<ps.length; i++){
//         ps[i].style.color = "blue"
//     }

// let images = document.getElementById()

let myPhotos = ["imagefolder/camon201.png","imagefolder/nokia3.jpeg","imagefolder/phone4.jpeg","imagefolder/technoblack.png","imagefolder/technocolor.png"]
let currentImages = 0
let myImage = document.getElementById("myImage")


let nextP = document.getElementById("next")
let prevP = document.getElementById("previous")

nextP.addEventListener("click",function(){
   currentImages++
   if(currentImages > myPhotos.length-1){
    currentImages =0
    console.log("goffff")
   }
//    document.getElementById("myImage").src = myPhotos[currentImages]
    myImage.src = myPhotos[currentImages]

})
prevP.addEventListener("click",function(){
    currentImages--
    if(currentImages <0){
        currentImages = myPhotos.length-1
    }
    myImage.src = myPhotos[currentImages]
})




let stateNames =["Oyo","Enugu","Kano","Bayela","kwara"]

let myState = document.getElementById("state")
let current= 0

let plus = document.getElementById("plus")
let sub = document.getElementById("plus")
plus.addEventListener("click", function(){
    current++
    if(current > stateNames.length-1){
        current= 0
    }
    myState.innerHTML = stateNames[current]
})

sub.addEventListener("click", function(){
    current--
    if( current < 0){
        current = stateNames.length-1
    }
    myState.innerText = stateNames[current]
})
// let myState = document.getElementById("state")
// let loopState = 0

// let plus = document.getElementById("plus")
// let sub = document.getElementById("sub")

// plus.addEventListener("click",function(){
//     loopState++
//     if(loopState > stateNames.length-1){
//         loopState = 0
//     }

//     myState.innerText = stateNames[loopState]
// })



// sub.addEventListener("click", function(){
//     loopState--
//     if(loopState < 0){
//         loopState = stateNames.length-1
//     }

//     myState.innerText = stateNames[loopState]
// })

let pri = document.createElement("p")
let priText = document.createTextNode("This is Nigerai")
let p = pri.appendChild(priText)


// myhtmlDiv = document.querySelector("h4")
// myhtmlDiv.appendChild(p)


let formSubmit = document.getElementById("convert")
let answer = document.getElementById("invisible")


// formSubmit.addEventListener("submit", function(e){
//     e.preventDefault()
//     let distance = document.getElementById("distance").value
    
//     distance = parseFloat(distance)
//     if(distance){
//         let conversion = distance * 1.609344.toFixed(2)
//         // let round = Math.round(conversion * 1000)/1000
//         // let round = conversion.toFixed(2)
//         console.log(conversion)
       
//         answer.innerHTML = `<h2>  ${distance} miles converted to kilometre ${conversion}</h2>`
//     }
//     else{
//         answer.innerHTML = `<h1 >  please provide a number</h1>`
//     }


// })

formSubmit.addEventListener("submit", function(e){

    let a = "please provide a number"
    e.preventDefault()
    let dis = document.getElementById("distance").value

    dis =parseFloat(dis)
    if(dis){
        let conversion = dis * 1.609344.toFixed(3)
        console.log(conversion)
        answer.innerHTML = conversion
    }
    else{
        answer.innerHTML = a
    }
 
})

// console.log("7:44")












































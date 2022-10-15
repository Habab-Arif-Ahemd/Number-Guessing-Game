//rand => random number is generated for user to guess
let GuessedNumber = Math.floor(Math.random() * 100);
console.log("dddddd",GuessedNumber)

//Grabbing the elements


let Round
// const input  = document.getElementById('input');
// const input2 = Math.floor(Math.random() * 100);
// const input3 = Math.floor(Math.random() * 100);
// const input4 = Math.floor(Math.random() * 100);
// const input5 = Math.floor(Math.random() * 100);
console.log("math random",)
const btn = document.getElementById('btn');
//text for the name
const text1 = document.getElementById('text1');
// for the number 
const text2 = document.getElementById('text2');
//Round number
const text3 = document.getElementById('text4');



const winnnername = document.getElementById('winnnername');






//counter for the amount of guesses the user has had
let noOfGuesses = 1;

//array list of the numbers the user has guessed
let guessedNumbers = [];

//variable that stores the prompt of the user's name
let name  = prompt("Enter name Player_1");
//When user presses button...

/**
 * checks if user's input is equal to the random number 
 * checks if input is empty
 * checks if input is more than 100 or less than 0
 * checks if input is lower or higher than random number
 */
 const player = [
    {input: "player",value :'',"win":"lose",PlayerCredit:100},
    {input: "player2",value: Math.floor(Math.random()*100),"win":"lose",PlayerCredit:100},
    {input: "player3",value: Math.floor(Math.random()*100),"win":"lose",PlayerCredit:100},
    {input: "player4",value: Math.floor(Math.random() * 100),"win":"lose",PlayerCredit:100},
    {input: "player5",value: Math.floor(Math.random() * 100),"win":"lose",PlayerCredit:100},

];
btn.addEventListener("click", (e)=>{
    //text3.innerText = "Round " + Round;
    var inputUser =parseInt( document.getElementById('input').value)    
    player[0].value=inputUser
    text2.innerText=""
    text2.innerText = "The Number was " + GuessedNumber;
    player.values[0]=player[0].value.value
    console.log("zxx",  player[0]   )
    var winner  = [];

    player.forEach(element => {
        console.log("the player ",element)
        if(element.value===GuessedNumber){
            winner.push( element.input);
            element.win= "win";
        }
        if(element.value!==GuessedNumber){
            element.PlayerCredit = element.PlayerCredit-10;
        }
        winnnername.innerHTML +="<div>"+element.input +":Credit"+element.PlayerCredit +",GuessedNumber"+element.value +"("+element.win+")"+"</div>"
        
    });
    //Round=+
    console.log(player)

    


})




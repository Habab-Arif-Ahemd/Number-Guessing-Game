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
    {input: "player3",value: GuessedNumber,"win":"lose",PlayerCredit:100},
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

    

  
// for(var i=0 ;i<player.length; i++){
//     //for first player 
// if(player[0].value.value==rand){
//     console.log("first win")
//     text1.innerText = "player one You Win " + name + "!!";
//     text4.innerText = "player 1 Credit is "  + player[0].PlayerCredit
//     text5.innerText = "player 2 Credit is "  + (player[1].PlayerCredit-= 10)
//     text6.innerText = "player 3 Credit is "  + (player[2].PlayerCredit-= 10)
//     text7.innerText = "player 4 Credit is "  + (player[3].PlayerCredit-= 10)
//     text8.innerText = "player 5 Credit is "  + (player[4].PlayerCredit-= 10)


//     /* style */
//     text1.style.color = "#6e48aa";
//     text2.style.color = "#6e48aa";
// }else if(player[i].value==rand){
//     let winner=player[i].input;
//     console.log("second win" + winner)
//     text1.innerText =  player[i].input + "You Win " + winner + "!!";

    
    
// /*     text4.innerText = "player 1 Credit is "  + player[i].PlayerCredit
//  */
// }




// else if(player[i].value == ""){
//     alert("Guess a number");
// }

// else if(player[i].value > 100){
//     alert("Number guessed should't exceed a value of 100");
// }

// else if(player[i].value < 0){
//     alert("Number guessed should't exceed a value below 0");
// }
    
// else if(player[i].value < rand){
//     guessedNumbers.push(input.value);
//     text1.innerText = "Your guess is too low.";
//     text2.innerText = "Round " + noOfGuesses;

//    /* player  */
//     Player1Credit -= 10
//     Player2Credit -= 10
//     Player3Credit -= 10
//     Player4Credit -= 10
//     Player5Credit -= 10
    
//     text4.innerText = "player 1 Credit is "  + Player1Credit
//     text5.innerText = "player 2 Credit is "  + Player2Credit
//     text6.innerText = "player 3 Credit is "  + Player3Credit
//     text7.innerText = "player 4 Credit is "  + Player4Credit
//     text8.innerText = "player 5 Credit is "  + Player5Credit

  
//     noOfGuesses += 1;

// }

// else if(input.value > rand){
//     guessedNumbers.push(input.value);
//     text1.innerText = "Your guess is too high.";
//     text2.innerText = "Round: " + noOfGuesses;
//     Player1Credit -= 10
//     Player2Credit -= 10
//     Player3Credit -= 10
//     Player4Credit -= 10
//     Player5Credit -= 10
    
//     text4.innerText = "player 1 Credit is "  + Player1Credit
//     text5.innerText = "player 2 Credit is "  + Player2Credit
//     text6.innerText = "player 3 Credit is "  + Player3Credit
//     text7.innerText = "player 4 Credit is "  + Player4Credit
//     text8.innerText = "player 5 Credit is "  + Player5Credit

//     noOfGuesses += 1;

// }


// }
   

})




// varables of alphabet
// var of alphabet randomized
// var list of guess, win, losses, guess left, guess letter, count guess
// function that displays these items
// key functions to get elements by id.
// clear display for reset of game.
<script>
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var whatLetterThinking = letter [Math.floor(Math.random() * letter.length)];
var guess = userGuess
var wins = 0;
var losses = 0;
var GuessesLeft = 0;
var guessesLeft, guessLetter, letterToGuess;

function display(){
    var guessesLeft =getElementById("GuessesLeft");
    var userGuess =getElementById("userGuess");
    var wins = document.getElementById("Wins");
    var losses = document.getElementById("Losses");
    
}
document.onkeyup = function(event){
    var whatLetterThinking = event.key;
    if (event.key === whatLetterThinking){
        wins();
        }else if (guessesLeft -1===0){
            losses();
            }else {
                fail(guest);
            }
}
display()

function wins(){
wins++;
resetGame();
}
    
function Losses(){
    losses++;
    resetGame();
}
    
function fail(letter){
guessesLeft=-1;
guessesLetters.push(letter);
}

function resetGame(){
    guessesLeft = 12;
    guessLetter =[];
    letterToGuess= Letters[math.flor(math.random()*letters.length)];
}
     
console.log ("letters to guess: " + letterToGuess);
</script>  







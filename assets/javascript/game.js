var hak=9,
    win=0,
    lose=0,
    correct=0,
    sel,
    userChoise,
    compGuess,
    count=-1,
    guessList=[];

    

    var wintext = document.getElementById("win-text");
    var losetext = document.getElementById("lose-text");
    var haktext = document.getElementById("hak-text");
    var guessListText = document.getElementById("guesses-text");
    



function randomise(begin,range){
    var trash;
    sel = Math.floor((Math.random()*range)+begin);
    for(var i=0; i!=1 ; trash++){ //infinite loop to chose proper number.
        if (sel>range){ // if number reach up to range, find another one
            sel = Math.floor((Math.random()*range)+begin);
        }
        else { // if number is proper and between range, go up to infinite loop
            i=1;
        }
    }
    trash=0;
    return sel;   
}
function scan(array,value){
    for(var i=0; i!=array.length; i++){
        if(i>0){
            if(array[i-1]===value){
                return true;   
            }
        }
    }
}


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
compGuess = alphabet[(randomise(0,alphabet.length))];

console.log("Alphabet Length " + alphabet.length);
console.log("First CompGuess " + compGuess);


document.onkeyup = function(event) {

    count++;
    
    if(count===9 || hak===0){
        count=0;
        
    } // check this!
    
    userChoise=event.key;
    userChoise=userChoise.toLowerCase();
    guessList[count]=userChoise;

    

    console.log(userChoise);
    
    if(compGuess===userChoise){
        win++;
        compGuess = alphabet[(randomise(0,alphabet.length))];
        hak=9;
        guessList=[];
        count=-1;
    }
    else if(count>0 && scan(guessList, userChoise)){ 
        alert("Push Different Button!");
        guessList[count]="Another Key Botton Pls";
        count--;
    }
    else {
        hak--;
        if(hak==0){
            hak=9;
            lose++;
            compGuess = alphabet[(randomise(0,alphabet.length))];
            guessList=[];
            count=-1;
        }
    }

    wintext.textContent = win;
    losetext.textContent = lose;
    haktext.textContent = hak;
    guessListText.textContent = guessList;

    console.log("userChoise " + userChoise);
    console.log("compGuess " + compGuess);
    //console.log("win " + win);
    //console.log("loses " + lose);
    //console.log("hak " + hak);
    console.log("Count " + count);
    console.log("Guess List " + guessList);
    console.log("scan " + scan(guessList, userChoise));
}


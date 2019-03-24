var hak=9,
    win=0,
    lose=0,
    correct=0,
    sel,
    trash,
    userChoise,
    compGuess,
    guessList=undefined;


function randomise(begin,range){
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


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
compGuess = alphabet[(randomise(0,alphabet.length))];

console.log("Alphabet Length " + alphabet.length);
console.log("First CompGuess " + compGuess);


document.onkeyup = function(event) {
    
    userChoise=event.key;
    userChoise=userChoise.toLowerCase();
    

    console.log(userChoise);
    
    if(compGuess===userChoise){
        win++;
        compGuess = alphabet[(randomise(0,alphabet.length))];
        hak=9;
    }
    else {

        hak--;
        //guessList[hak]=userChoise;
        if(hak==0){
            hak=9;
            lose++;
            compGuess = alphabet[(randomise(0,alphabet.length))];
        }
    }


    //modeltext.textContent = car.model;
    //maketext.textContent = car.make;
    //colortext.textContent = car.color;
    //milagetext.textContent = car.mileage;
    //workingtext.textContent = car.isWorking;

    console.log("userChoise " + userChoise);
    console.log("compGuess " + compGuess);
    console.log("win " + win);
    console.log("loses " + lose);
    console.log("hak " + hak);
    console.log("guessList " + guessList);
};


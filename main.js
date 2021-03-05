//setting state equal to zero
//assigning variables
//Toggles the appearance of next button
//Toggles the appearance of reset button
//Sets behavior and defines class for elements to be displayed 
//random integer function
//Array to have random characters with numbers
//function for reset button to reset the game with new symbols
//function to change state going from 0 to 5 and reset after clicking on state 5
//default page with go button that will switch after this state
//picking a number between 1-99
//add the numbers together
//subtract the new number from the original
//find the new number
//reveal the answer along with the symbol
let bgtxt = document.getElementById('bigtext');
let nxtbtn = document.getElementById('next');
let smtxt = document.getElementById('smalltext');
let resetBtn = document.getElementById('goreset');
let selectedSymbol = '';

//eventListener for resetBtn to send back to state 0
resetBtn.addEventListener('click', resetState);

//eventListener to change to the next state
nxtbtn.addEventListener('click', changeState);

var state = 0;
//generating a random string 
const symbols = ["fab fa-500px","fab fa-accessible-icon","fas fa-adjust","fab fa-affiliatetheme","fab fa-airbnb","fab fa-adn","fas fa-anchor","fas fa-arrow-alt-circle-right","fas fa-arrows-alt","fab fa-bandcamp","fas fa-balance-scale-left","fas fa-ban","fas fa-band-aid","fas fa-blind"];
//Event handler 


//function for resetting game back to original state
function resetState() {
    state = 0;
    renderState();
}
//function for moving forward one state
function changeState() {
    state++;
    renderState();
}
//game initialized, going through each switchstate
function renderState() {
    switch (state) {
        case 0:

            // maintext Pick a number
            bgtxt.innerHTML = 'I can read your mind...';
            resetBtn.style.visibility = 'Hidden';
            // small text
            smtxt.innerHTML = 'Click Go to start';

            // go needs to change to reset icon
            nxtbtn.innerHTML = 'Go';
            nxtbtn.style.visibility ='visible';
            break;

        case 1:

            bgtxt.innerHTML = 'Pick a number between 01-99';
            nxtbtn.style.visibility = 'visible';
            smtxt.innerHTML = 'When you have your number click next';

            resetBtn.style.visibility = 'visible';
            resetBtn.innerHTML = 'Reset';
            nxtbtn.innerHTML = 'Next';
            break;

        case 2:

            bgtxt.innerHTML = 'Add both digits together to get a new number';

            nxtbtn.style.visibility = 'visible';

            smtxt.innerHTML = 'Ex: 14 is 1 + 4 = 5, click next to proceed';

            break;

        case 3:

            bgtxt.innerHTML = 'Subtract your new number from the original number ';

            nxtbtn.style.visibility = 'visible';

            smtxt.innerHTML = 'Ex: 14 - 5 = 9, click next to proceed';


            break;

        case 4:

            bgtxt.innerHTML = ' ';
            var selectedIndex = Math.floor(Math.random() * symbols.length);
            selectedSymbol = symbols[selectedIndex];
            
            for (var i = 0; i < 100; i++) {
                if (i % 9 == 0) {
                bgtxt.innerHTML += i + ' = ' + '<i class="'+selectedSymbol+'"></i>' + '<br>';

                }
                else {
                    var randomIndex = Math.floor(Math.random() * symbols.length);
                    var randomSymbol = symbols[randomIndex];
                    bgtxt.innerHTML += i + ' = ' + '<i class="'+randomSymbol+'"></i>' + '<br>';
                }

            }

            // next button needs to say REVEAL
            nxtbtn.style.visibility = 'visible';
            // small text 'when you have your number click next'
            smtxt.innerHTML = 'Ex: 14 is 1 + 4 = 5, click next to proceed';

            break;

        case 5:
            bgtxt.innerHTML = '<i class="'+selectedSymbol+'"></i>';
            nxtbtn.style.visibility = 'hidden'
            smtxt.innerHTML = 'Your symbol is: ' + '<i class="'+selectedSymbol+'"></i>';
            resetBtn.style.visibility = 'visible';
            break;

    }

}
//function init
renderState();
//document.body.onload=init method
Mind Reader Project Pseudocode

Javascript State / User View
*State 0* = 'View 1'
*State 1* = 'View 2'
*State 2* = 'View 3'
*State 3* = 'View 4'
*State 4* = 'View 5'
*State 5* = 'View 6'


As an uninformed user I would like to be able to do the following:

Case 0:

*State 0* 'View 1'
- Clearly see a container with Title Content in it, and a "Go" BTN at the bottom right corner to allow the user to initialize the game. (Note:This "Go" BTN will be replaced with the "Home" BTN after *Stage 0*)

*Constant*
- There should be an option in the footer to show what the current view is as an integer (1-6), symbols(< >) giving the option to advance a view or go back one view, as well as a home button that sends the user back to the first view (Homepage). // This will remain constant throughout the users experience, regardless of what current view is being displayed.

Case 1:

*State 1* 'View 2'
- After initializing the game there should be clear instructions at the top instructing the user to select a number between 1 and 99. Below that in the container a "Next" BTN will initialize, allowing the user to advance to the next view (or state) after choosing their number. Instructions telling the user to click the "Next" BTN after selecting a number should appear below the "Next" BTN
- A new "Home" BTN will replace the "Go" BTN in the bottom right corner of the container.

**Important** This "Home" BTN will remain throughout the users experience from *State 1* 'view 2' through *State 5* 'view 6'. Onclick this BTN will take the user back to the homepage (*State 0* 'view 1')

Case 2:

*State 2* 'View 3'
- After clicking the "Next" BTN the user should see instructions to "Add both digits together to get a new number". The next button will remain present, and below it the instructions will change to show an example of adding the digits. (14 is 1 + 4 = 5), as well as instructions to click the "Next" BTN to continue the game.
//Home button will remain active in the bottom right corner.

Case 3:

*State 3* 'View 4'
- This view should look almost identical to 'view 3'. The top text should change instructing the user to "Subtract your new number from the original number". The "Next" BTN should remain to allow the user to continue the game, as well as an example of subtraction below the "Next" BTN (Ex: 14 - 5 = 9).

Case 4:

*State 4* 'View 5'
- This view will show a list of symbols ranging from 0 to 99 in the main content box. The list should be able to be scrolled through in order to see whatever number corresponds with the symbol. As a user I should be able to click on the scroll wheel and select any number by scrolling through the list of randomly assigned symbols.

Case 5:

*State 5* 'View 6'
-  

Functions that will be used
document.getElementById() - This will fetch an element from the index.html having the ID as specified by the user
.value - access value of html element
Math.random() - This will generate the number between 1-99
Math.floor() - Used to return the number to the nearest integer (downwards)

//Function to initiate game

//variables
bgtxt = main text content
nxtbtn = Next button
smtxt = small text (below next btn)
resetBTN = reset (replace go btn)


Javascript Pseudo
Pick a number from 01 - 99 = n
Add both digits together to get a new number n
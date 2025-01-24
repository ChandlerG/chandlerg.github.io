```mermaid
flowchart TD
Start([Start from User Input]) --> GenerateRandomNumber([Generate Random Number from 1-100]) --> UserNumber([User Types in Number]) --> ValidNumber([Is the number provided valid?]) --> DisplayYes([Yes]) --> CorrectNumber?
ValidNumber --> DisplayNo([No])
CorrectNumber?([Check if the number is too high, too low or if it is correct.])
DisplayCorrect([The Number is correct! You win!]) --> DisplayPlay([Display: You win! Play Again?])
DisplayNo --> Error([Error! Try Again!]) --> UserNumber
CorrectNumber? --> TooLow([The Number is too low])-->DisplayTooLowTest([Your number is too low! Try again!]) --> UserNumber
CorrectNumber? --> TooHigh([The Number is too high]) --> DisplayTooHighTest([Your number is too high! Try again!]) --> UserNumber
CorrectNumber? --> Correct([The number is correct]) --> DisplayCorrect
```
## Mermaid Diagram Explained
+ The game starts with the user inputting start (most likely with a click.)
+ The game randomly generates a number from 1-100, this number is hidden from the user
+ The user then types in a number from 1-100
+ This number must be valid, if not an error message is given and the user is prompted to retype their number
+ Once a valid number is given, the game then checks if the number is too low, too high or if it is correct
+ If the number is too low or too high, the game provides a message saying so. The user then must retype a number.
+ Once the correct number is given, the user wins the game! They are then prompted to play again!

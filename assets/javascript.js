        // set the answer array 
        var gameAnsrs = ['duster', 'cuda', 'mustang', 'camero', 'challenger', 'fastback', 'scatpack', 'bigblock', 'smallblock', 'stroker', 'firebird', 'blown', 'carburetor', 'fuelinjector', 'torque'];
        console.log(gameAnsrs);

        var wordSpace = document.getElementById("word-length");
        var wrongGuess = document.getElementById("wrong-choices");
        var lifesRemain = document.getElementById("total-lifes");
        var lives = 15;
        var dashFill;
        var wins = 0;
        var incorrectGuess;

        function newGame() {
            dashFill = [];
            incorrectGuess = [];
            lives=15;
            //have the compute pick and word
            computerPick = gameAnsrs[Math.floor(Math.random() * gameAnsrs.length)];
            console.log('computer picks ' + computerPick);
            //split the computer pick into indivdual letters
            answerLetters = computerPick.split("");
            console.log(answerLetters)
            //assign the dashes for the word
            for (var i = 0; i < answerLetters.length; i++) {
                dashFill[i] = (" _ ");
            }
            console.log(dashFill);
            wordSpace.textContent = dashFill;
            wrongGuess.textContent = "Wrong Letters";
            lifesRemain.textContent = "Remaining Lifes " + lives;


            document.onkeydown = function (event) {
                var userGuess = event.key;
                console.log(event.key);
                var correctLetter = answerLetters.includes(userGuess);
                if (correctLetter) {
                    for (var i = 0; i < computerPick.length; i++) {
                        var c = computerPick[i];
                        console.log(c);
                        if (c === userGuess) 
                            dashFill[i] = c;
                            wordSpace.textContent = dashFill;
                            win();
                        };
                    




                } else if( 
                            incorrectGuess.indexOf(userGuess) === -1){
                            incorrectGuess.push(userGuess);
                            lives--;
                            win();
            };
            
            wrongGuess.textContent = "Wrong Letters " + incorrectGuess.toString();
            lifesRemain.textContent = "Remaining Lifes " + lives;
        };
                };
            




        
        function win() {

            if (dashFill.toString() == answerLetters.toString()) {
                wins++
                setTimeout (function(){alert("congrats gearhead you wrenched the " + computerPick)
                newGame()},200)
            } if (lives === 0) {
                setTimeout (function(){alert("sorry the "+computerPick+' drove by')
                newGame()},200)
             }
            console.log(dashFill.toString());
            console.log(answerLetters.toString());

        }

        




        newGame();
        win();
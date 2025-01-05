        // creez variabila pentru Scor
        let score = JSON.parse(localStorage.getItem('score')) || {
            castiguri: 0,
            pierderi: 0,
            egalitati: 0,
        };

        updateScoreElement();

        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            // Creez rezultatul comparand Alegerea Mea cu Alegerea Calculatorului.
            let result = '';

            if (playerMove === 'Hartie') {
                if (computerMove === 'Hartie') {
                    result = 'Egalitate.';
                } else if (computerMove === 'Piatra') {
                    result = 'Ai Castigat!';
                } else if (computerMove === 'Foarfeca') {
                    result = 'Ai Pierdut ...';
                }

            } else if (playerMove === 'Foarfeca') {
                if (computerMove === 'Foarfeca') {
                    result = 'Egalitate.';
                } else if (computerMove === 'Hartie') {
                    result = 'Ai Castigat!';
                } else if (computerMove === 'Piatra') {
                    result = 'Ai Pierdut ...';
                }

            } else if (playerMove === 'Piatra') {
                if (computerMove === 'Piatra') {
                    result = 'Egalitate.';
                } else if (computerMove === 'Foarfeca') {
                    result = 'Ai Castigat!';
                } else if (computerMove === 'Hartie') {
                    result = 'Ai Pierdut ...';
                }

            }

            if (result === 'Ai Castigat!') {
                score.castiguri += 1;
            } else if (result === 'Ai Pierdut ...') {
                score.pierderi += 1;
            } else if (result === 'Egalitate.') {
                score.egalitati += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result')
                .innerHTML = `${result} <br><br>`;

            document.querySelector('.js-moves')
                .innerHTML = `Ai ales &nbsp &nbsp <img class="move-icon" src="images/${playerMove}.png"> &nbsp - &nbsp &nbsp <img class="move-icon" src="images/${computerMove}.png"> &nbsp a ales Calculatorul`;

                
        }
        
        function updateScoreElement () {
            document.querySelector('.js-score')
                .innerHTML = `Castiguri: ${score.castiguri} | Pierderi: ${score.pierderi} | Egalitati: ${score.egalitati}`;
        }

        function pickComputerMove() {

            // Creez un numar Random
            const randomNumber = Math.random();

            // Creez pasul Calculatorului.
            let computerMove = '';
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'Piatra';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'Foarfeca';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'Hartie';
            }
            return computerMove;
        }
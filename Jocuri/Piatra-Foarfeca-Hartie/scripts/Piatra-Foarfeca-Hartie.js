        // creez variabila pentru Scor
        let score = JSON.parse(localStorage.getItem('score')) || {
            castiguri: 0,
            pierderi: 0,
            egalitati: 0,
        };

        updateScoreElement();

        let isAutoPlaying = false;

        let intervalId;

        /*
        const autoPlay = () => {

        };
        */
       
        function autoPlay() {
            if (!isAutoPlaying) {
                intervalId = setInterval(() => {
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                }, 1000)
                isAutoPlaying = true;
            } else {
                clearInterval(intervalId);
                isAutoPlaying = false;
            }

            const changeButton = document.querySelector('.js-auto-play-button');
            
            if (isAutoPlaying) {
                changeButton.innerHTML = 'Stop!';
                changeButton.classList.add('stop-auto-play');
            } else {
                changeButton.innerHTML = 'Auto Play';
                changeButton.classList.remove('stop-auto-play');
            }
        }

        document.querySelector('.js-piatra-button').addEventListener('click', () => {
            playGame('Piatra');
        });

        document.querySelector('.js-foarfeca-button').addEventListener('click', () => {
            playGame('Foarfeca');
        });

        document.querySelector('.js-hartie-button').addEventListener('click', () => {
            playGame('Hartie');
        });

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'p') {
                playGame('Piatra');
            } else if (event.key === 'f') {
                playGame('Foarfeca');
            } else if (event.key === 'h') {
                playGame('Hartie');
            }
        });

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


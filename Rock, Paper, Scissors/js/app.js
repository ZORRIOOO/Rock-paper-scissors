'use strict';

const game = () => {
    let pScore = 0,
        cSсore = 0;


    //Начало игры
    const startGame = () => {
        const playBtn = document.querySelector('.intro button'),
              introScreen = document.querySelector('.intro'),
              match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //PlayMatch
    const playMatch = () => {
        const options = document.querySelectorAll('.options button'),
              playerHand = document.querySelector('.player_hand'),
              computerHand = document.querySelector('.computer_hand'),
              hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });

        //Выборы компьютера
        const computerOptions = ['Камень', 'Бумага', 'Ножницы'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //Выбор компьютeра
                const computerNumber = Math.floor(Math.random() * 3),
                      computerChoise = computerOptions[computerNumber];
                // Вызов сравнения ходов игрока и компьютера
                compareHands(this.textContent, computerChoise);
                //Обновляем images
                setTimeout(() => {
                    console.log(this.textContent);
                    //Uodate images
                    playerHand.src = `assets/${this.textContent}.png`;
                    computerHand.src = `assets/${computerChoise}.png`;
                }, 2000); 
                
                //Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player_score p'); 
        const computerScore = document.querySelector('.computer_score p'); 
        playerScore.textContent = pScore;
        computerScore.textContent = cSсore;
    };
    const compareHands = (playerChoise, computerChoise) => {
        //Обновление текста
        const winner = document.querySelector('.winner');
        //Проверка на ничью
        if (playerChoise === computerChoise) {
            winner.textContent = 'Ничья';
            return;
        }
        // Проверка на камень
        if (playerChoise === 'Камень') {
            if(computerChoise === 'Ножницы') {
                winner.textContent = 'Игрок побеждает!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Компьютер побеждает!';
                cSсore++;
                updateScore();
                return;
            } /* Бумага */
        }
        // Проверка на бумагу
        if (playerChoise === 'Бумага') {
            if(computerChoise === 'Ножницы') {
                winner.textContent = 'Компьютер побеждает!';
                cSсore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Игрок побеждает!';
                pScore++;
                updateScore();
                return;
            }
        }
        // Проверка на ножницы
        if (playerChoise === 'Ножницы') {
            if(computerChoise === 'Камень') {
                winner.textContent = 'Компьютер побеждает!';
                cSсore++;
                updateScore();
                return;
            } else {
                winner.textContent =  'Игрок побеждает!';
                pScore++;
                updateScore();
                return;
            }
        }
        
    }; 

    //Вызов всех внутренних функций
    startGame();
    playMatch();
};

//Старт всех функций игры
game();
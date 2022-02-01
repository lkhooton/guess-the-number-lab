const game = {
  title: 'Guess the Number!',
  biggestNum: 4,
  smallestNum: 1,
  playerChoice: null,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      game.getGuess();
        game.render(); 
      },
      prevGuesses: [],
      getGuess : function(){
        while (this.playerChoice !== this.secretNum){
          this.playerChoice = parseInt(prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`));
          this.prevGuesses.push(this.playerChoice);
        } 
    },
  
  render: function(){
       if (this.playerChoice === this.secretNum){
          prompt (`Congrats! you guessed the number in ${this.prevGuesses.length} guesses!!
            Previous guesses: ${this.prevGuesses}`);
        } if (this.playerChoice > this.secretNum){
          prompt (`Your guess it too high!
          Previous guesses: ${this.prevGuesses}`);
          game.guess();
        } if (this.playerChoice < this.secretNum){
          prompt (`Your guess is too low!!
          Previous guesses: ${this.prevGuesses}`);
          game.guess();
        }
      }
} 
game.play()



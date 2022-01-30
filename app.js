const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  playerChoice: null,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      game.getGuess();
      this.prevGuesses.push(this.wholeNumber);
      if (typeof(this.wholeNumber) === 'number' && this.wholeNumber !== this.secretNum){
        game.render();
      }
  },
  prevGuesses: [],
  getGuess: function(){
    while (this.playerChoice !== this.secretNum){
      let playerChoice = prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`);
      let wholeNumber = parseInt(this.playerChoice);
      if(this.wholeNumber > this.biggestNum){
        let wholeNumber = 100;
      }
      if (this.wholeNumber < this.smallestNum){
        let wholeNumber = 1;
      }
      if (typeof this.wholeNumber !== 'number'){
        let wholeNumber = Math.floor(Math.random() * 100)
      }
      render = function(){
        if (this.wholenNumber === secretNum){
          alert (`Congrats! you guessed the number in ${game.prevGuesses.length} guesses!!
            Previous guesses: ${prevGuesses}`);
        }else if (this.wholeNumber > this.secretNum){
          alert (`Your guess it too high!
          Previous guesses: ${this.prevGuesses}`);
          game.guess();
        }else if (this.wholeNumber < this.secretNum){
          alert(`Your guess is too low!!
          Previous guesses: ${this.prevGuesses}`);
          game.guess();
        }
      }
    }
  }
}
game.play()
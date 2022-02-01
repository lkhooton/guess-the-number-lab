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
  getGuess : function(){
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
      if (this.wholeNumber === this.secretNum) break;//try to get while loop to stop
    } 
  },//confused on while loops. Not sure how to end it. 



//Trouble connecting everything together
  render: function(){
       if (this.wholeNumber === secretNum){
          prompt (`Congrats! you guessed the number in ${game.prevGuesses.length} guesses!!
            Previous guesses: ${prevGuesses}`);
        }if (this.wholeNumber > this.secretNum){
          prompt (`Your guess it too high!
          Previous guesses: ${this.prevGuesses}`);
          game.guess();
        }if (this.wholeNumber < this.secretNum){
          prompt (`Your guess is too low!!
          Previous guesses: ${this.prevGuesses}`);
          game.guess();
          
        
        }
}
}
game.play()



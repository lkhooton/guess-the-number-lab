const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  prevGuesses: [],
  getGuess: function(){
    while (this.playerChoice !== this.secretNum){
      let playerChoice = prompt (`Enter a guess between ${smallestNum} and ${biggestNum}.`);
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
    }
  }
}

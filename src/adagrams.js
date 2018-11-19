const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letter_bank = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1
    }

  let letters = [];

   for (let key in letter_bank) {
    while (letter_bank[key] > 0) {
      letters.push(key)
      letter_bank[key] -= 1
      }
    }

    letters.sort(() => Math.random() - 0.5);
    return letters.slice(0, 10);
  },


// wave 2
  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandMap = {};

    lettersInHand.forEach((letter) => {
      if (lettersInHandMap[letter]) {
        lettersInHandMap[letter] += 1;
      }
      else {
        lettersInHandMap[letter] = 1;
      }
    });


    for (let i = 0; i < input.length; i++) {
      if (lettersInHandMap[input[i]]) {
        lettersInHandMap[input[i]] -= 1;
      }
      else {
        return false;
      }
    }
    return true;
  },


// wave 3
  scoreWord(word) {
    const letter_value = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10
    };

    let value = 0;

    for (let i = 0; i < word.length; i++) {
      let upcaseLetter = word.toUpperCase();
      value += letter_value[upcaseLetter[i]];
    }

    if (word.length > 6) {
      value += 8;
      }
    return value;
    },

// wave 4
  highestScoreFrom(words) {
    let highScore = {
      word: "",
      score: 0
    };

    words.forEach((word) => {
      const score = this.scoreWord(word);

      if (score > highScore.score) {
        highScore.score = score;
        highScore.word = word;
      }
      else if (score == highScore.score) {
        if (word.length == 10 && highScore.word.length != 10) {
          highScore.word = word;
        }
        else if (word.length < highScore.word.length && highScore.word.length != 10) {
          highScore.word = word;
        }
      }
    });

    return highScore;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;

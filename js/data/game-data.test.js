import {
  assert
} from 'chai';

// describe(`Array`, () => {
//   describe(`#indexOf()`, () => {
//     it(`should return -1 when the value is not present`, () => {
//       assert.equal(-1, [1, 2, 3].indexOf(4));
//     });
//   });
// });
function ArrayGenerator(result, time, lives = 3) {
  this.result = result;
  this.time = time;
  this.lives = lives;
}

function generationAnswers(badAnswer = null) {
  let answers = [];
  for (let i = 0; i < 10; i++) {
    if (i === badAnswer) {
      answers.push(new ArrayGenerator(false, `mid`));
    }
    answers.push(new ArrayGenerator(true, `mid`));
  }
  return answers;
}
// let answers = generationAnswers();
// console.log(answers);


function getScrore(answersArray, lives = 3) {
  let score = 0;
  for (let i = 0; i < answersArray.length; i++) {
    if (!answersArray[i].result) {
      return -1;
    }
    score += 100;
  }
  return (score + 50 * lives);
}
// console.log(getScrore(generationAnswers()));

describe(`answers`, () => {

  it(`Возврат true если все ответы верны `, () => {
    assert.equal(-1, getScrore(generationAnswers(2)));
  });
  it(`Возврат кол-ва очков `, () => {
    assert.equal(1150, getScrore(generationAnswers()));
  });
});

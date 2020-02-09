import {
  LEVELS_COUNT,
  ANSWER_VALUES,
  POINTS
} from "./constans"

export const calculateStats = (model) => {
  if (model.getAnswers().length < LEVELS_COUNT) {
    return {
      answers: model.getAnswers(),
      bonuses: [],
      totalPoints: 0,
      totalResult: {
        success: false
      }
    };
  }

  let totalFastAnsvers = model.getAnswers().filter((answers) => answers === ANSWER_VALUES.fast).length;
  let totalSlowAnswers = model.getAnswers().filter((answers) => answers === ANSWER_VALUES.slow).length;
  let totalCorrectAnswers1 = model.getAnswers().filter((answers) => answers === ANSWER_VALUES.correct).length;
  let totalCorrectAnswers = totalFastAnsvers + totalSlowAnswers + totalCorrectAnswers1;
  let totalLivesRemained = model.state.lives;

  let regularPoints = totalCorrectAnswers * POINTS[ANSWER_VALUES.correct];
  const fastBonus = totalFastAnsvers * POINTS[ANSWER_VALUES.fast];
  const slowBonus = totalSlowAnswers * POINTS[ANSWER_VALUES.slow];
  const livesBonus = totalLivesRemained * POINTS.lives;

  let bonuses = [];

  if (totalFastAnsvers) {
    bonuses.push({
      title: `Бонус за скорость`,
      icon: `fast`,
      count: totalFastAnsvers,
      points: POINTS[ANSWER_VALUES.fast],
      total: fastBonus
    })
  }
  if (totalSlowAnswers) {
    bonuses.push({
      title: `Штраф за медлительность`,
      icon: `slow`,
      count: totalSlowAnswers,
      points: POINTS[ANSWER_VALUES.slow],
      total: slowBonus
    });
  }

  if (totalLivesRemained) {


    bonuses.push({
      title: `Бонус за жизни`,
      icon: `alive`,
      count: totalLivesRemained,
      points: POINTS.lives,
      total: livesBonus
    });
  }

  const score = regularPoints + livesBonus + fastBonus + slowBonus;

  return {

    answers: model.getAnswers(),
    bonuses,
    regularPoints,
    totalResult: {
      success: true,
      score
    }
  };

};

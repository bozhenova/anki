import { State } from '../data/data';

const changeQuestion = (game: State) => {

  return { ...game, question: ++game.question };
};

export default changeQuestion;
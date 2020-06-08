type State = { question: number, answers: { result: boolean, meaning: string }[] };

const INITIAL_STATE: State = Object.freeze({
  question: 1,
  answers: []
});

type Data = { id: string, kanji: string, heisig_en: string, jlpt: string, kun_readings: string[], on_readings: string[], meanings: string[] };


type Settings = { correctAnswerBonus: number, interval: number, dead: number, fail: number, indexStep: number };

const GAME_SETTINGS: Settings = {
  correctAnswerBonus: 1,
  interval: 1000,
  dead: -1,
  fail: 0,
  indexStep: 1
};

export { INITIAL_STATE, GAME_SETTINGS, State, Settings, Data };
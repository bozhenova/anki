import Answer from './data/answer';
import { INITIAL_STATE, GAME_SETTINGS, State, Data } from './data/data';
import changeQuestion from './utils/changeQuestion';
import Application from './application';
import Loader from './loader';


export class GameModel {
  private _state: State;

  constructor(public gameData: string[]) {
    this.restart();
  }

  get state(): State {
    return this._state;
  }

  set state(data) {
    this._state = data;
  }

  isLastQuestion(): boolean {
    return false;
    // return this.state.question === this.gameData.length - 1;
  }

  getNextQuestion(): void {
    this.state = changeQuestion(this.state);
  }

  restart(): void {
    this.state = { ...INITIAL_STATE };
  }

  // updateScore(condition: boolean): void {
  //   const answer: Answer = condition ? new Answer(true) : new Answer(false);
  //   // this.state.answers.push(answer);
  // }

  getCurrentKanji() {
    return this.gameData[this.state.question - 1];
  }

  async getCurrentQuestion() {
    const data = await Loader.loadKanjiData(this.getCurrentKanji());
    return data;
  }
}
import { INITIAL_STATE, State } from './data/data';
import changeQuestion from './utils/changeQuestion';
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
    return this.state.question === this.gameData.length - 1;
  }

  getNextQuestion(): void {
    this.state = changeQuestion(this.state);
  }

  restart(): void {
    this.state = { ...INITIAL_STATE };
  }

  getCurrentKanji() {
    return this.gameData[this.state.question - 1];
  }

  async getCurrentQuestion() {
    const data = await Loader.loadKanjiData(this.getCurrentKanji());
    return data;
  }
}
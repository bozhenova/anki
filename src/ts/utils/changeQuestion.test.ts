import changeQuestion from "./changeQuestion";
import { State } from "../data/data";
import { expect } from "chai";

describe(`Changing the question`, () => {
  it(`should change the question when the player answered the question`, () => {
    const gameOne: State = {
      question: 5,
      answers: [],
    };
    const gameTwo: State = {
      question: 4,
      answers: [],
    };
    expect(
      changeQuestion(gameOne).question).to.equal(6);
    expect(
      changeQuestion(gameTwo).question).to.equal(5);
  });
});

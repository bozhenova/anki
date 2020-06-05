import Application from './application';
import { Data } from './data/data';
import { fetchData } from './utils/fetchData';

const gradeURL: string = `https://kanjiapi.dev/v1/kanji/grade-`;
const kanjiURL: string = `https://kanjiapi.dev/v1/kanji/`;

export default class Loader {

  static async loadData(level: string) {
    const data = await fetchData(gradeURL, level);
    Application.data = data;
  }

  static async loadKanjiData(kanji: string) {
    const data = await fetchData(kanjiURL, kanji);
    return await data;
  }

}


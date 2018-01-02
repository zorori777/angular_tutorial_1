import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InmMemoryDbService {
  createDb() {
    const members = [
      { id: 11, name: "えだまめ" },
      { id: 12, name: "わたしゃん" },
      { id: 13, name: "ざこれいじ" },
      { id: 14, name: "ウメキチ師匠" },
      { id: 15, name: "だいきぱいせん" },
      { id: 16, name: "ことむ" },
      { id: 17, name: "あすにゃん" },
    ];
    return { members };
  }

}

import { Component } from '@angular/core';

export class Member {
  id: number;
  name: string;
}

const MEMBERS: Member[] = [
  { id: 11, name: "えだまめ" },
  { id: 12, name: "わたしゃん" },
  { id: 13, name: "ざこれいじ" },
  { id: 14, name: "ウメキチ師匠" },
  { id: 15, name: "だいきぱいせん" },
  { id: 16, name: "ことむ" },
  { id: 17, name: "あすにゃん" },
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>住人一覧</h2>
    <ul class="members">
      <li *ngFor="let member of members">
        <span class="badge">id: {{member.id}}</span> {{member.name}}
      </li>
    </ul>
    `
  ,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .members {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .members li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .members li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .members li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .members .text {
      position: relative;
      top: -3px;
    }
    .members .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
`]
})

export class AppComponent{
  title = "曙ハウス名簿";
  members = MEMBERS;

}

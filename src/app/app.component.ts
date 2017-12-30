import { Component } from "@angular/core"

@Component({
  selector: "my-app",
  template:`
    <h1>{{title}}</h1>
    <a routerLink="/members">曙橋ハウスメンバー</a>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
  title = "曙橋 house";
}

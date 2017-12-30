import { Component } from "@angular/core"

@Component({
  selector: "my-app",
  template:`
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">ダッシュボードー</a>
      <a routerLink="/members">曙橋ハウスメンバー</a>
      <router-outlet></router-outlet>
    </nav>
      `
})

export class AppComponent {
  title = "曙橋 house";
}

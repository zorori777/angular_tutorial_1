import { Component } from "@angular/core"

@Component({
  selector: "my-app",
  template:`
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">ダッシュボードー</a>
      <a routerLink="/members" routerLinkActive="active">曙橋ハウスメンバー</a>
      <router-outlet></router-outlet>
    </nav>
      `,
  styleUrls: ["./app.component.css"]
    })

export class AppComponent {
  title = "曙橋 house";
}

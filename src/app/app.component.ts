import { Component } from "@angular/core"

@Component({
  selector: "my-app",
  template:`
    <h1>{{title}}</h1>
    <my-members></my-members>
  `
})

export class AppComponent {
  title = "曙橋 house";
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{member}}</h2>
  `;

})
export class AppComponent{
  title = "社員管理名簿"
  member = "山田太郎"
}

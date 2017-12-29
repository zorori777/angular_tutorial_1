import { Component } from '@angular/core';

export class Member {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{member.name}}</h2>
  `,
})
export class AppComponent{
  title = "社員管理名簿";
  member: Member = {
    id: 1,
    name: "山田太郎"
  }
}

import{ Component, Input } from "@angular/core";
import{ Member } from "./member";

@Component({
  selector: "member-detail"
  template: `
    <div *ngIf= "Member">
      <h2>{{Member.name}}</h2>
      <div><label>id: </label>{{Member.id}}</div>
      <div>
        <label>name: </label>
        <input type="text" [(ngModel)]="Member.name" placeholder="名前">
      </div>
    </div>
  `
})


export class MemberDetailComponent {
  member: Member;

  @Input()member: Member;

}

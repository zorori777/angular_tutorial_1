import{ Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router"
import { Location } from "@angular/common"
import "rxjs/add/operator/switchMap"
import{ Member } from "./member";
import { MemberService } from "./member.service";

@Component({
  selector: "member-detail",
  template: `
    <div *ngIf= "member">
      <h2>{{member.name}}</h2>
      <div><label>id: </label>{{member.id}}</div>
      <div>
        <label>name: </label>
        <input type="text" [(ngModel)]="member.name" placeholder="名前">
      </div>
    </div>
  `
})


export class MemberDetailComponent implements OnInit {
  @Input() member: Member;

    constructor(
      private memberService: MemberService,
      private route: ActivatedRoute,
      private location: Location
    ){ }

    ngOnInit() {
      this.route.paramMap
        .switchMap((param: ParamMap) => {
          return this.memberService.getMember(+param.get("id"));
        })
        .subscribe(member => this.member);


    }
  }

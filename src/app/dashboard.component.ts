import { Component, OnInit } from "@angular/core"

import { Member } from "./member";
import { MemberService } from "./member.service";

@Component({
  selector: "my-dashbord",
  templateUrl: "./dashboard.component.html"
})

export class DashboardComponent {

  members: Member[];

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.getMembers().then(members => this.members
    = members.slice(1, 5));
  }
}


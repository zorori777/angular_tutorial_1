import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import "rxjs/add/observable/of";

import "rxjs/add/observable/catch";
import "rxjs/add/observable/debounceTime";
import "rxjs/add/observable/distinctUntilChanged";

import { MemberSearchService } from "./member-search.service";
import { Member } from "./member";


@Component({
  selector: "member-search",
  templateUrl: "./member-search.component.html",
  styleUrls: ["./member-search.component.css"],
  providers: [MemberSearchService]
})

export class MemberSearchComponent implements OnInit {
  member: Observable<Member[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private memberSearchService: MemberSearchService,
    private router: Router
  ){}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.members = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ?
        this.memberSearchService.search(term) :
        Observable.of<Member[]>([])
      )
      .catch(error => {
        console.log(error);
        return Observable.of<Member[]>([]);
      })
  }

  gotoDetail(member: Member): void {
    let link = ["/detail", member.id]
    this.router.navigate(link);
  }
}



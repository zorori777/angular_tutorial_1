import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router"

import { AppComponent }  from './app.component';
import { DashboardComponent} from "./dashboard.component"
import { MemberDetailComponent } from "./member-detail.component";
import { MembersComponent } from "./members.component"
import { MemberService } from "./member.service"

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/",
        pathMatch: "full"
      }
      ,
      {
        path: 'members',
        component: MembersComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "detail/:id",
        component: MemberDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MemberDetailComponent,
    MembersComponent
  ],
  bootstrap:    [
    AppComponent
  ],
  providers: [ MemberService ]
})
export class AppModule { }

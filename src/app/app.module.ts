import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router"

import { AppComponent }  from './app.component';
import { DashboardComponent} from "./dashboard.component"
import { MemberDetailComponent } from "./member-detail.component";
import { MembersComponent } from "./members.component"
import { MemberService } from "./member.service"
import { AppRoutingModule } from "./app-routing.module"

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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

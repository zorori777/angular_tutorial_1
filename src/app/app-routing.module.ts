import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"

import { DashboardComponent} from "./dashboard.component"
import { MemberDetailComponent } from "./member-detail.component";
import { MembersComponent } from "./members.component"

const routes: Routes = [
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}

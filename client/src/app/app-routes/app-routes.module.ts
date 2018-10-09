import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../not-found/not-found.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { GroupsComponent } from '../groups/groups.component';

const routes: Routes = [
  {
    path:'', 
    component: ContactsComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },

  {
    path: 'notfound',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: "notfound"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
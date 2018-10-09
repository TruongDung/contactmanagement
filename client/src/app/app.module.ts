import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatListModule, MatGridListModule, MatTooltipModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormModalComponent } from './form-modal/form-modal.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupModalComponent } from './group-modal/group-modal.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ContactsComponent,
    ContactCardComponent,
    FormModalComponent,
    GroupsComponent,
    GroupDetailComponent,
    GroupModalComponent
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    AppRoutesModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatTooltipModule,
    MatInputModule,
    HttpClientModule,
    MatProgressBarModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalComponent,
    GroupModalComponent
  ]
})
export class AppModule { }

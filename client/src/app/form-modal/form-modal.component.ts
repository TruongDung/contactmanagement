import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContactsService } from '../contacts.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  private _contacts: ContactsComponent;

  @Input() set contacts(value: ContactsComponent) {
    this._contacts = value;
  }

  get contacts(): ContactsComponent {
    return this._contacts;
  }

  public contact: Contact = new Contact();

  @ViewChild('f') form: any;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private contactsService: ContactsService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  submitForm() {

    if (!this.form.valid) {
      return;
    }
    const body = this.contact;

    if (body.id === "") {
      //add new contact
      this.contactsService.postContact(body).subscribe(
        result => {
          this.closeModal();
          this.contactsService.reloadEvent();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      //update old contact
      this.contactsService.putContact(body.id, body).subscribe(
        result => {
          this.closeModal();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}

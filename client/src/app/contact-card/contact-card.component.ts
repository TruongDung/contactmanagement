import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactsService } from '../contacts.service';
import { ContactsComponent } from '../contacts/contacts.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-contact-card',
   templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {

  private _contacts: ContactsComponent;

  @Input() set contacts(value: ContactsComponent){
    this._contacts = value;
  }

  get contacts():ContactsComponent {
    return this._contacts;
  }

  @Input() contact: Contact;
  constructor(private contactsService: ContactsService, private modalService: NgbModal) {
  }

  reload(loader) {
    console.log("loader", loader);
  }

  onEdit(contact){
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.contact = contact; 
    modalRef.result.then((result) => {
    console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  onDelete(id) {
    console.log('delete'+ id);
    this.contactsService.deleteContact(id).subscribe(
      result => {
        console.log(result);
        this._contacts.getContacts();
      },
      err => {
        console.log(err);
      }
    );
  }
}


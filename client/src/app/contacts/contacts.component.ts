import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model/contact.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public contacts: Array<Contact>;

  constructor(private contactsService: ContactsService, private modalService: NgbModal) { 
    this.contactsService.currentMessage.subscribe(msg => {
      if (msg === "reload") {
        this.getContacts();
      }
    });
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() : void {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  searchContacts(value): void {
    this.contactsService.searchContacts(value)
      .subscribe(contacts => this.contacts = contacts);
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.result.then((result) => {
    console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  onSearchingContact(e) {
    //See notes about 'which' and 'key' enter
    if (e.keyCode == 13) {
        var value = e.target.value;
        this.searchContacts(value);
        return false;
    }
  }

  get self(): ContactsComponent {
    return this;
  }
}

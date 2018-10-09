import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Group } from '../model/group.model';
import { GroupsService } from '../groups.service';
import { ContactsService } from '../contacts.service';

import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.css']
})
export class GroupModalComponent implements OnInit {

  public group: Group = new Group();
  @ViewChild('f') form: any;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private groupService: GroupsService, private contactsService: ContactsService) { }
  dropdownList : Array<Contact>;
  dropdownSettings = {};
  public contacts: Array<Contact>;
  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => {
        this.dropdownList = contacts;
        this.dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'fullName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 0,
        allowSearchFilter: true
      };
      });
    }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  submitForm() {
    
    if(!this.form.valid)
    return;

    const body = this.group;

    if(body.id === "") {
      //add new group
      this.groupService.postGroup(body).subscribe(
        result => {
          this.closeModal();
          this.groupService.reloadEvent();
        },
        err => {
          console.log(err);
        }
      );
    } else {
       //update old group
       this.groupService.putGroup(body.id, body).subscribe(
        result => {
          this.closeModal();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  onItemSelect (item:any) {
    console.log(item);
  }
  onSelectAll (items: any) {
    console.log(items);
  }

}

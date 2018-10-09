import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { Group } from '../model/group.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupModalComponent } from '../group-modal/group-modal.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public groups: Array<Group>;

  constructor(private groupsService: GroupsService, private modalService: NgbModal) { 
    this.groupsService.currentMessage.subscribe(msg => {
      if(msg === "reload") {
        this.getGroups();
      }
    });
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() : void {
    this.groupsService.getGroups()
    .subscribe(groups => this.groups = groups);
  }

  openGroupModal() {
    const modalRef = this.modalService.open(GroupModalComponent);
    modalRef.result.then((result) => {
    console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  get self(): GroupsComponent {
    return this;
  }
}

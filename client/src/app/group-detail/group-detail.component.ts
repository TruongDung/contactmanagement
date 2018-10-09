import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../model/group.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupModalComponent } from '../group-modal/group-modal.component';
import { GroupsService } from '../groups.service';
import { GroupsComponent } from '../groups/groups.component';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  @Input() group: Group;
  constructor(private modalService: NgbModal, private groupsService: GroupsService) { }

  private _groups: GroupsComponent;

  @Input() set groups(value: GroupsComponent) {
    this._groups = value;
  }

  get groups():GroupsComponent {
    return this._groups;
  }

  ngOnInit() {
  }

  onEdit(group) {
    const modalRef = this.modalService.open(GroupModalComponent);
    modalRef.componentInstance.group = group;
    modalRef.result.then((result) => {
    console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  onDelete(id) {
    this.groupsService.deleteGroup(id).subscribe(
      result => {
        this._groups.getGroups();
      }
    );
  }
}

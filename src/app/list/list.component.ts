import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService, Ticket, User } from '../backend.service';

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() tickets: Ticket[];
  @Input() allUsers: User[];

  @Output() addTicket = new EventEmitter<any>();
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getAssignedToName(ticket: Ticket): string {
    const assignedUserId: number = ticket.assigneeId;
    const filteredUser = this.allUsers.filter( (filtered: User) => {
      return filtered.id != assignedUserId;
    });
    return filteredUser[0].name;
  }

  addNewTicket(): void {
    const newTicket = this.formGroup.value;
    this.addTicket.emit({
      newTicket
    });
    this.initForm();
  }

}

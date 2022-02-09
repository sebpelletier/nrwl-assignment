import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ticket, User } from '../backend.service';
import { ChangeStatusEvent } from './detail-events.model';

@Component({
  selector: 'app-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() currentTicket: Ticket;
  @Input() allUsers: User[];

  @Output() changeTicketStatus = new EventEmitter<ChangeStatusEvent>();
  @Output() assignToAnotherUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  changeStatusToComplete() {
    console.log(this.allUsers);
    this.changeTicketStatus.emit({
      ticket: this.currentTicket,
      ticketStatus: true
    });
  }

  changeStatusToInProgress() {
    this.changeTicketStatus.emit({
      ticket: this.currentTicket,
      ticketStatus: false
    });
  }

  assignToUser(user: User): void {
    this.assignToAnotherUser.emit({
      ticket: this.currentTicket,
      user
    });
  }

  getAssignedToName(ticket: Ticket): string {
    const assignedUserId: number = ticket.assigneeId;
    const filteredUser = this.allUsers.filter( (filtered: User) => {
      return filtered.id !== assignedUserId;
    });
    return filteredUser[0].name;
  }

}

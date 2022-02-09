import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  changeStatusToComplete() {
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

}

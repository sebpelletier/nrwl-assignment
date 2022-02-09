import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.css']
})
export class ListWrapperComponent implements OnInit, OnDestroy {

  tickets;
  users = this.backend.users();

  ticketsSub: Subscription;

  constructor(private backend: BackendService) {
    this.fetchTickets();
  }

  ngOnInit(): void {
  }

  fetchTickets(): void {
    this.ticketsSub = this.backend.tickets().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }

  ngOnDestroy(): void {
      this.ticketsSub.unsubscribe();
  }

  addTicket(ticket: any): void {
    console.log(ticket);
    this.backend.newTicket({ description: ticket.newTicket.description });
    this.fetchTickets();
  }

}

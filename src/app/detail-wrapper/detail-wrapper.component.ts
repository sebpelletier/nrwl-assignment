import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BackendService, Ticket, User } from '../backend.service';
import { ChangeStatusEvent } from '../detail/detail-events.model';

@Component({
  selector: 'app-detail-wrapper',
  templateUrl: './detail-wrapper.component.html',
  styleUrls: ['./detail-wrapper.component.css']
})
export class DetailWrapperComponent implements OnInit, OnDestroy {
  currentTicket: Observable<Ticket>;
  allUsers: Observable<User[]> = this.backendService.users();
  routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService
  ) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const currentTicketId: number = +params['id'];
      this.fetchTicketDetails(currentTicketId);
    });
  }

  fetchTicketDetails(id: number): void {
    this.currentTicket = this.backendService.ticket(id);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  changeTicketStatus(event: ChangeStatusEvent): void {
    this.currentTicket = this.backendService.complete(event.ticket.id, event.ticketStatus);
    // this.fetchTicketDetails(event.ticket.id);
  }

}

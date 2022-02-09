import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-detail-wrapper',
  templateUrl: './detail-wrapper.component.html',
  styleUrls: ['./detail-wrapper.component.css']
})
export class DetailWrapperComponent implements OnInit, OnDestroy {
  currentTicket;
  routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const currentTicketId: number = +params['id'];
      this.currentTicket = this.backendService.ticket(currentTicketId);
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}

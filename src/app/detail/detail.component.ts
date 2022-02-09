import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../backend.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() currentTicket: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

}

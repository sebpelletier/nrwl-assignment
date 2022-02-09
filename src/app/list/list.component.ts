import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tickets = this.backend.tickets();
  users = this.backend.users();

  constructor(private backend: BackendService) {}

  ngOnInit(): void {
  }

}

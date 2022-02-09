import { Ticket } from "../backend.service";

export interface ChangeStatusEvent {
    ticket: Ticket;
    ticketStatus: boolean;
}
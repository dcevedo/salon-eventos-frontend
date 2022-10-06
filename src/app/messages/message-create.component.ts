import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/clients';
import { Message } from '../model/messages';
import { Partyroom } from '../model/partyroom';
import { ClientService } from '../services/client.service';
import { MessageService } from '../services/message.service';
import { PartyroomService } from '../services/partyroom.service';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent implements OnInit {

  message:Message = new Message();
  clients:Client[];
  partyrooms:Partyroom[];

  constructor(private messageService:MessageService, private clientService:ClientService,
    private partyroomService:PartyroomService,
    private router:Router) { }

  ngOnInit(): void {
    this.getClients();
    this.getPartyrooms();
  }

  private getPartyrooms() {
    this.partyroomService.getPartyroomsList().subscribe({
      next : list => this.partyrooms = list,
    });
  }

  private getClients() {
    this.clientService.obtenerListaDeClients().subscribe({
      next : list => this.clients = list,
    });
  }

  private saveMessage(){
    this.messageService.createMessage(this.message).subscribe({
      complete: () => {
        this.toMessageTable();
      }
    })
  }
  private toMessageTable() {
    this.router.navigate(['/messages']);
  }

  onSubmit(){
    console.log(this.message);
    this.saveMessage();
  }

}

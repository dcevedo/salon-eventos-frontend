import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/clients';
import { Message } from '../model/messages';
import { Partyroom } from '../model/partyroom';
import { ClientService } from '../services/client.service';
import { MessageService } from '../services/message.service';
import { PartyroomService } from '../services/partyroom.service';

@Component({
  selector: 'app-message-update',
  templateUrl: './message-update.component.html',
  styleUrls: ['./message-update.component.css']
})
export class MessageUpdateComponent implements OnInit {

  id:number;
  message:Message = new Message();
  clients:Client[];
  partyrooms:Partyroom[];

  constructor(private clientService:ClientService, private partyroomService:PartyroomService,
     private messageService:MessageService,
     private router:Router,
     private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getClients();
    this.getPartyrooms();
    this.messageService.getMessageById(this.id).subscribe({
      next : response => this.message = response,
    })
  }

  onSubmit(){
    this.messageService.updateMessage(this.message.idMessage,this.message).subscribe({
      error : e => console.log(e),
      complete: () => {
        console.log(this.message);
        this.toMessageTable();
      }
      
    })
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

  private toMessageTable() {
    this.router.navigate(['/messages']);
  }

  compareClients(obj1:Client,obj2:Client){
    if(!obj1 || !obj2){
      return false;
    }
    return obj1.name == obj2.name;
  }

  comparePartyrooms(obj1:Partyroom,obj2:Partyroom){
    if(!obj1 || !obj2){
      return false;
    }
    return obj1.name == obj2.name;
  }

}

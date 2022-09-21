import { Clients } from './../clients';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients:Clients[];

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    // this.obtenerClients();
    this.clients = [
      {
        id : 1,
        name : "David",
        email : "davida@gmail.com",
        age : 27
      },
      {
        id: 2,
        name : "Andres",
        email : "andresg@gmail.com",
        age : 22
      }
    ]
  }
  private obtenerClients(){
    this.clientService.obtenerListaDeClients().subscribe(dato => {
      this.clients = dato;
    })
  }
}

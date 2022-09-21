import { Client } from './../clients';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients:Client[];
  client:Client;

  constructor(private clientService:ClientService, private router:Router) { }

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

  private obtenerClient(id:number){
    this.clientService.ObtenerClientporId(id).subscribe(c =>{
      this.client = c;
    })
  }

  clientUpdate(id:number){
    this.router.navigate(['client-update',id]);
    // this.obtenerClient(id);
    // this.clientService.clientUpdate(id,this.client).subscribe({
    //   error : (e) => console.log(e),
    //   complete : () => console.info('complete')
    // });
  }

  clientDelete(id:number){
    this.clientService.clientDelete(id).subscribe({
      error : (e) => console.log(e),
      complete : () => {
        console.info('complete')
        // this.obtenerClients
      }
    });
  }

  clientDetails(id:number){
    this.router.navigate(['client-details',id])
  }
}

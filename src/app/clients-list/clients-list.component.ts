import { Client } from './../clients';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
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
    this.obtenerClients();
    // this.clients = [
      // {
      //   id : 1,
      //   name : "David",
      //   email : "davida@gmail.com",
      //   age : 27
      // },
    //   {
    //     id: 2,
    //     name : "Andres",
    //     email : "andresg@gmail.com",
    //     age : 22
    //   }
    // ]
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
  }

  clientDelete(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al cliente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.clientService.clientDelete(id).subscribe({
          error : (e) => {
            swal(
              'Error',
              'El cliente no ha sido eliminado',
              'error'
            )
            console.log(e)
          },
          complete : () => {
            console.info('complete')
            this.obtenerClients();
            swal(
              'Cliente eliminado',
              'El cliente ha sido eliminado con exito',
              'success'
            )
          }
        });
      }
    })
  }

  clientDetails(id:number){
    this.router.navigate(['client-details',id])
  }

}

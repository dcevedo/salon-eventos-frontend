import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../clients';
// import  swal  from 'sweetalert2';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id:number;
  client : Client = new Client();
  constructor(private clientService : ClientService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.ObtenerClientporId(this.id).subscribe({
      next : (c) => this.client = c,
      error : (e) => console.log(e)
    })
  }

  private irAClientList(){
    this.router.navigate(['/clients']);
    // swal('Cliente Actualizado',`El cliente ${this.client.name} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.clientService.clientUpdate(this.client.id,this.client).subscribe({
      error : e => console.log(e),
      complete : () => {
        console.info(`Complete the submit!`);
        this.irAClientList
      }
    });
  }
}

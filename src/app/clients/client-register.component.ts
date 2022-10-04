import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/clients';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  client : Client = new Client();

  constructor(private clientService: ClientService, private router:Router) { }

  ngOnInit(): void {
    
  }

  guardarClient(){
    this.clientService.registrarClient(this.client).subscribe( {
      next : (v) => console.log(v),
      error : (e) => console.log(e),
      complete : () => console.info('complete')
    });
  }

  irAClientList(){
    this.router.navigate(['/clients'])
  }


  onSubmit(): void{
    console.log(this.client);
    this.guardarClient();
    this.irAClientList();
  }
}

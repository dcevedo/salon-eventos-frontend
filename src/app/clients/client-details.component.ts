import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/clients';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  
  id:number;
  client:Client;

  constructor(private clientService:ClientService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.ObtenerClientporId(this.id).subscribe({
      next : (c) => this.client = c,
      complete : () => console.info(`complete operation`)
    })
  }

}

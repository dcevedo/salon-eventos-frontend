import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Message } from '../model/messages';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages:Message[];
  message:Message;

  constructor(private messageService:MessageService, private router:Router) { }

  ngOnInit(): void {
    this.getMessages();
  }

  private getMessages() {
    this.messageService.getMessagesList().subscribe({
      next : response => this.messages = response
    });
  }

  messageUpdate(id:number){
    this.router.navigate(['messages-update',id]);
  }

  messageDelete(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el mensaje",
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
        this.messageService.deleteMessage(id).subscribe({
          error : (e) => {
            swal(
              'Error',
              'El Mensaje no ha sido eliminado',
              'error'
            )
            console.log(e)
          },
          complete : () => {
            console.info('complete')
            this.getMessages();
            swal(
              'Mensaje eliminado',
              'El mensaje ha sido eliminado con exito',
              'success'
            )
          }
        });
      }
    })
  }

  messageDetails(id:number){
    this.router.navigate(['messages-details',id]);
  }

}

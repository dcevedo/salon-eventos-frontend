import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Partyroom } from '../model/partyroom';
import { PartyroomService } from '../services/partyroom.service';

@Component({
  selector: 'app-partyroom-list',
  templateUrl: './partyroom-list.component.html',
  styleUrls: ['./partyroom-list.component.css']
})
export class PartyroomListComponent implements OnInit {

  partyrooms:Partyroom[];
  partyroom:Partyroom;

  constructor(private partyroomService:PartyroomService, private router:Router) { }

  ngOnInit(): void {
    this.getPartyrooms();
  }

  private getPartyrooms(){
    this.partyroomService.getPartyroomsList().subscribe(data => {
      this.partyrooms = data;
    })
  }

  partyroomUpdate(id:number){
    this.router.navigate(['partyroom-update',id]);
  }

  partyroomDelete(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el salon",
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
        this.partyroomService.deletePartyroom(id).subscribe({
          error : (e) => {
            swal(
              'Error',
              'El salon no ha sido eliminado',
              'error'
            )
            console.log(e)
          },
          complete : () => {
            console.info('complete')
            this.getPartyrooms();
            swal(
              'Salon eliminado',
              'El salon ha sido eliminado con exito',
              'success'
            )
          }
        });
      }
    })
  }
  partyroomDetails(id:number){
    this.router.navigate(['partyroom-details',id])
  }

}

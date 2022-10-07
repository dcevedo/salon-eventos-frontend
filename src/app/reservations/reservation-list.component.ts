import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations:Reservation[];
  reservation:Reservation;

  constructor(private reservationService:ReservationService, private router:Router) { }

  ngOnInit(): void {
    this.getReservations();
  }

  private getReservations() {
    this.reservationService.getReservations().subscribe({
      next : response => this.reservations = response,
    })
  }

  reservationUpdate(id:number){
    this.router.navigate(['reservations-update',id])
  }

  reservationDelete(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la reservacion",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminala',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.reservationService.deleteReservation(id).subscribe({
          error : (e) => {
            swal(
              'Error',
              'La reservacion no ha sido eliminada',
              'error'
            )
            console.log(e)
          },
          complete : () => {
            console.info('complete')
            this.getReservations();
            swal(
              'reserva eliminado',
              'La reservacion ha sido eliminada con exito',
              'success'
            )
          }
        });
      }
    })
  }

  reservationDetails(id:number){
    this.router.navigate(['reservations-details',id]);
  }
}

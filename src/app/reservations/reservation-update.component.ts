import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDTO } from '../dto/clientDTO';
import { ClientMapper } from '../dto/clientMappers';
import { PartyroomDTO } from '../dto/partyroomDTO';
import { PartyroomMapper } from '../dto/partyroomMappers';
import { ScoreDTO } from '../dto/scoreDTO';
import { ScoreMappers } from '../dto/scoreMappers';
import { Reservation } from '../model/reservation';
import { ClientService } from '../services/client.service';
import { PartyroomService } from '../services/partyroom.service';
import { ReservationService } from '../services/reservation.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  id:number;
  reservation:Reservation = new Reservation();
  partyrooms:PartyroomDTO[];
  clients:ClientDTO[];
  scores:ScoreDTO[];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  constructor(private reservationService:ReservationService,
    private partyroomService:PartyroomService,
    private clientService:ClientService,
    private scoreService:ScoreService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getClients();
    this.getPartyrooms();
    this.getScores();
    this.reservationService.getReservationById(this.id).subscribe({
      next : v => this.reservation = v,
    })
  }
  
  private getPartyrooms() {
    this.partyroomService.getPartyroomsList().subscribe({
      next : list => this.partyrooms = list.map(v => PartyroomMapper.convertToDTO(v)),
      complete : () => console.log(this.partyrooms)
      
    });
  }

  private getClients() {
    this.clientService.obtenerListaDeClients().subscribe({
      next : list => this.clients = list.map(v => ClientMapper.convertToDTO(v)),
    });
  }

  private getScores() {
    this.scoreService.getScores().subscribe({
      next : list => this.scores = list.map(v => ScoreMappers.convertToDTO(v)),
    });
  }

  onSubmit(){
    this.setDatesOnReservation();
    console.log(this.reservation);
    this.reservationService.updateReservation(this.reservation.idReservation,this.reservation).subscribe({
      complete : () => {
        this.toReservationTable();
      }
    })
  }
  private setDatesOnReservation() {
    this.reservation.startDate = this.range.value.start ?? new Date();
    this.reservation.devolutionDate = this.range.value.end ?? new Date();
  }

  private toReservationTable() {
    this.router.navigate(['reservations']);
  }

  comparePartyrooms(option1:PartyroomDTO,option2:PartyroomDTO){
    if(!option1 || !option2){
      return false;
    }
    return option1.name == option2.name;
  }
  compareClients(option1:ClientDTO,option2:ClientDTO){
    if(!option1 || !option2){
      return false;
    }
    return option1.name == option2.name;
  }
  compareScores(option1:ScoreDTO,option2:ScoreDTO){
    if(!option1 || !option2){
      return false;
    }
    return option1.value == option2.value;
  }
}

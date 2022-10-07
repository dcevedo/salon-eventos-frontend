import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/clients';
import { Partyroom } from '../model/partyroom';
import { Reservation } from '../model/reservation';
import { Score } from '../model/scores';
import { ClientService } from '../services/client.service';
import { PartyroomService } from '../services/partyroom.service';
import { ReservationService } from '../services/reservation.service';
import { ScoreService } from '../services/score.service';
import {FormGroup, FormControl} from '@angular/forms';
import { PartyroomMapper } from '../dto/partyroomMappers';
import { PartyroomDTO } from '../dto/partyroomDTO';
import { ClientDTO } from '../dto/clientDTO';
import { ScoreDTO } from '../dto/scoreDTO';
import { ClientMapper } from '../dto/clientMappers';
import { ScoreMappers } from '../dto/scoreMappers';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css'],
})
export class ReservationCreateComponent implements OnInit {

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
    private router:Router) {}

  ngOnInit(): void {
    this.getClients();
    this.getPartyrooms();
    this.getScores();
  }

  private getPartyrooms() {
    this.partyroomService.getPartyroomsList().subscribe({
      next : list => this.partyrooms = list.map(v => PartyroomMapper.convertToDTO(v)),
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

  private saveReservation(){
    this.reservationService.createReservation(this.reservation).subscribe({
      complete : () => {
        this.toReservationTable();
      }
    })
  }
  private toReservationTable() {
    this.router.navigate(['reservations'])
  }

  onSubmit(){
    this.setDatesOnReservation();
    console.log(this.reservation);
    this.saveReservation();
  }

  private setDatesOnReservation() {
    this.reservation.startDate = this.range.value.start ?? new Date();
    this.reservation.devolutionDate = this.range.value.end ?? new Date();
  }
}

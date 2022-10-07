import { Client } from "./clients";
import { Partyroom } from "./partyroom";
import { Score } from "./scores";

export class Reservation{
    idReservation:number;
    startDate:Date;
    devolutionDate:Date;
    status:string;
    partyroom:Partyroom;
    client:Client;
    score:Score;
}
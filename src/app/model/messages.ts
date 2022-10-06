import { Client } from "./clients";
import { Partyroom } from "./partyroom";

export class Message {
    idMessage:number;
    messageText:string;
    partyroom:Partyroom;
    client:Client;
}
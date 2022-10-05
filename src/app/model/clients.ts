import { Message } from "./messages";
import { Reservation } from "./reservation";

export class Client {
    idClient:number;
    name:string;
    email:string;
    age:number;
    messages: Array<Message>;
    reservations: Array<Reservation>;
}

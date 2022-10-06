import { CategoryDTO } from "../dto/categoryDTO";
import { Category } from "./categories";
import { Message } from "./messages";
import { Reservation } from "./reservation";

export class Partyroom{
    id:number;
    name:string;
    owner:string;
    capacity:number;
    description:string;
    category:Category;
    messages:Array<Message>;
    reservations:Array<Reservation>;
}
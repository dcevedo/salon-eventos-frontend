import { Partyroom } from "../model/partyroom";
import { PartyroomDTO } from "./partyroomDTO";

export class PartyroomMapper{
    static convertToDTO(partyroom:Partyroom) : PartyroomDTO{
        const partyroomDTO = {id:partyroom.id, name:partyroom.name};
        return partyroomDTO;        
    }
}
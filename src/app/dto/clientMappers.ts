import { Client } from "../model/clients";
import { ClientDTO } from "./clientDTO";

export class ClientMapper{
    static convertToDTO(client:Client) : ClientDTO{
        // map(d =>({id: d.id, name: d.name}))
        const clientDTO = {idClient:client.idClient, name:client.name};
        return clientDTO;        
    }
}
import { Message } from "../model/messages";
import { MessageDTO } from "./messageDTO";

export class MessageMapper{
    static convertToDTO(message:Message) : MessageDTO{
        // map(d =>({id: d.id, name: d.name}))
        const messageDTO = {idMessage:message.idMessage, messageText:message.messageText};
        return messageDTO;
    }
}
import { Score } from "../model/scores";
import { ScoreDTO } from "./scoreDTO";

export class ScoreMappers{
    static convertToDTO(score:Score):ScoreDTO{
        const scoreDTO = {idScore: score.idScore, value: score.value};
        return scoreDTO;
    }
}
import { Category } from "../model/categories";
import { CategoryDTO } from "./categoryDTO";

export class CategoryMapper{
    static convertToDTO(category:Category) : CategoryDTO{
        // map(d =>({id: d.id, name: d.name}))
        const categoryDTO = {id:category.id, name:category.name};
        return categoryDTO;        
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTO } from '../dto/categoryDTO';
import { CategoryMapper } from '../dto/categoryMappers';
import { Category } from '../model/categories';
import { Partyroom } from '../model/partyroom';
import { CategoryService } from '../services/category.service';
import { PartyroomService } from '../services/partyroom.service';

@Component({
  selector: 'app-partyroom-update',
  templateUrl: './partyroom-update.component.html',
  styleUrls: ['./partyroom-update.component.css']
})
export class PartyroomUpdateComponent implements OnInit {

  id:number;
  partyroom:Partyroom = new Partyroom();
  categories:CategoryDTO[];
  category:Category;

  constructor(private partyroomService:PartyroomService, private router:Router, private route:ActivatedRoute,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCategories();
    this.partyroomService.getPartyroomById(this.id).subscribe({
      next : value => this.partyroom = value,
      error : e => console.log(e),
      complete : () => console.info('complete')
    });
  }

  private toPartyroomTable(){
    this.router.navigate(['/partyrooms']);
  }

  onSubmit(){
    this.partyroomService.updatePartyroom(this.partyroom.id,this.partyroom).subscribe({
      error: e => console.log(e),
      complete : () => {
        console.info('complete');
        this.toPartyroomTable();
      }
    });
  }

  private getCategories() {
    this.categoryService.getCategoriesList().subscribe({
      next : list => this.categories = list.map(d => CategoryMapper.convertToDTO(d)),
      // next : list => this.categories = list,
      error : e => console.log(e),
      complete : () => {
        console.info('complete');
      }
    })
  }

  compareCategory(option1:CategoryDTO,option2:CategoryDTO): boolean {
    if(!option1 || !option2){
      return false;
    }
    return option1.name==option2.name;
  }
}

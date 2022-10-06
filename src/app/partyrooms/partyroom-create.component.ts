import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDTO } from '../dto/categoryDTO';
import { CategoryMapper } from '../dto/categoryMappers';
import { Category } from '../model/categories';
import { Partyroom } from '../model/partyroom';
import { CategoryService } from '../services/category.service';
import { PartyroomService } from '../services/partyroom.service';

@Component({
  selector: 'app-partyroom-create',
  templateUrl: './partyroom-create.component.html',
  styleUrls: ['./partyroom-create.component.css']
})
export class PartyroomCreateComponent implements OnInit {

  partyroom:Partyroom = new Partyroom();
  // categories:Category[];
  categories:CategoryDTO[];
  // category:Category;
  category:CategoryDTO;

  constructor(private partyroomService:PartyroomService, private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
    console.time("categorias");
    this.getCategories();
    console.timeEnd("categorias");
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

  savePartyroom(){
    this.partyroomService.createPartyroom(this.partyroom).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete:() =>{
        console.info('complete');
        this.toPartyroomTable();
      }
    })
  }
  toPartyroomTable() {
    this.router.navigate(['/partyrooms'])
  }

  onSubmit(){
    console.log(this.partyroom);
    this.savePartyroom();
  }

}

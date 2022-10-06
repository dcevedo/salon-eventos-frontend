import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../model/categories';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category:Category = new Category();

  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
  }

  private saveCategory(){
    this.categoryService.createCategory(this.category).subscribe({
      complete : () => {
        this.toCategoryTable();
      }
    })
  }

  toCategoryTable() {
    this.router.navigate(['categories']);
  }

  onSubmit(){
    this.saveCategory();
    console.log(this.category);
    
  }
}

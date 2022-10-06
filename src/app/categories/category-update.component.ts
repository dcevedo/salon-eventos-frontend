import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/categories';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  id:number;
  category:Category;

  constructor(private categoryService:CategoryService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe({
      next : response => this.category = response,
    });
  }

  onSubmit(){
    this.categoryService.updateCategory(this.category.id,this.category).subscribe({
      complete : () => {
        console.log(this.category);
        this.toCategoryTable();
      }
    })
  }

  private toCategoryTable() {
    this.router.navigate(["categories"]);
  }

}

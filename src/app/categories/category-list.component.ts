import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Category } from '../model/categories';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[];
  category:Category;

  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategoriesList().subscribe({
      next : response => this.categories = response,
    })
  }

  categoryUpdate(id:number){
    this.router.navigate(['categories-update',id]);
  }

  categoryDelete(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la categoria",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínala',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.categoryService.deleteCategory(id).subscribe({
          error : (e) => {
            swal(
              'Error',
              'La categoria no ha sido eliminada',
              'error'
            )
            console.log(e)
          },
          complete : () => {
            console.info('complete')
            this.getCategories();
            swal(
              'Categoria eliminado',
              'La categoria ha sido eliminado con exito',
              'success'
            )
          }
        });
      }
    })
  }

  categoryDetails(id:number){
    this.router.navigate(['categories-details',id]);
  }
}

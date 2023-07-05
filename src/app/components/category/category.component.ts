import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { HttpClient } from '@angular/common/http';
import { CategoryResponseModel } from 'src/app/models/categoryResponseModel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categories:Category[]=[];
  apiUrl="https://localhost:44383/api/Categories/getall";
  constructor(private httpClient:HttpClient){

  }
 ngOnInit(): void {
   this.getCategory();
 }
  getCategory(){
    this.httpClient.get<CategoryResponseModel>(this.apiUrl).subscribe(responce=>{
      this.categories=responce.data;
    });
  }
}

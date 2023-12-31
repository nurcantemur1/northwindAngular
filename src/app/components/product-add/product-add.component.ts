import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
  productAddForm: FormGroup
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
  }
  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      categoryId:["",Validators.required],
      productName : ["",Validators.required],
      unitPrice: ["",Validators.required],
      unitInStock:["",Validators.required]
    })
  }
}

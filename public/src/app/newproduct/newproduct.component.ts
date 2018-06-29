import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  newProduct: any;
  errors: any;

  constructor(private productservice: ProductService, private router: Router){}

  ngOnInit(){
    this.errors = []
    this.newProduct = {name: '', price: undefined, qty: 0}
  }

  submit(){
    this.productservice.newProduct(this.newProduct).subscribe(data => {
      if(!data['error']){
        this.router.navigate(['/products'])
      }
      else{
        for(let error of Object.keys(data['error']['errors'])){
          this.errors.push(data['error']['errors'][error].message)
        }
      }
    })
  }
}

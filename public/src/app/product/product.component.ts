import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;

  constructor(private productservice: ProductService) { }

  ngOnInit(){
    console.log('component')
    this.productservice.getProducts().subscribe(data => {
      console.log(data)
      if(data[0] != 'error'){
        this.products = data
      }
      else{
        console.log(data['error'])
      }
    })
  }

}

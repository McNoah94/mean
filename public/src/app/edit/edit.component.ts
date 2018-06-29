import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any;
  newProduct: any;
  errors: any;

  constructor(private productservice: ProductService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.errors = []
    this.newProduct = {name: '', qty: undefined, price: undefined}
    this.productservice.getProduct(this.route.params['value'].id)
    .subscribe(data => {
      if(!data['error']){
        this.product = data
        this.reset()
      }
      else{
        for(let error of Object.keys(data['error']['errors'])){
          this.errors.push(data['error']['errors'][error].message)
        }
      }
    })
  }

  reset(){
    this.newProduct.name = this.product.name
    this.newProduct.qty = this.product.qty
    this.newProduct.price = this.product.price
  }

  submit(){
    this.errors = []
    this.productservice.update(this.newProduct)
    .subscribe(data => {
      if(!data['error']){
        this.router.navigate(['/products'])
      }
      else{
        console.log(data['error'])
        for(let error of Object.keys(data['error']['errors'])){
          this.errors.push(data['error']['errors'][error].message)
        }
      }
    })
  }
}

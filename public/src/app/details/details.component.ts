import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any;

  constructor(private productservice: ProductService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.productservice.getProduct(this.route.params['value'].id)
    .subscribe(data => {
      if(!data['error']){
        this.product = data
      }
      else{
        console.log(data)
      }
    })
  }

  delete(id){
    this.productservice.delete(id)
    .subscribe(data => {
      if(!data['error']){
        this.router.navigate(['/products'])
      }
      else{
        console.log(data)
      }
    })
  }
}

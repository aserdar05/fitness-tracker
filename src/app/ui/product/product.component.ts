import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName: string = "";
  @Output() productClicked = new EventEmitter();

  constructor(private productsService: ProductsService) { 
  }

  ngOnInit() {
  }

  onClicked() {
    //this.productClicked.emit();
    this.productsService.removeProduct(this.productName);
  }

}

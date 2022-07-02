import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A Book';
  isDisabled = true;
  products: string[] = [];
  private productsSubscription: Subscription; 

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
    }, 3000);
  }
  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
  ngOnInit(): void {
    //This method is initialized when component is created after the constructor is executed.
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  onAddProduct(form: NgForm) {
    console.log(form);
    if(form.valid){
      //this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
      this.products = this.productsService.getProducts();
    }
  }

  onRemoveProduct(productName: string) {
    //this.products = this.products.filter(p => p !== productName);
      this.productsService.removeProduct(productName);
      this.products = this.productsService.getProducts();
  }
}

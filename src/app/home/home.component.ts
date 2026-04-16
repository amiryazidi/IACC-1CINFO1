import { Component } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  priceMax!:number
  color:string = "red"
  title:string = "Welcome to ProjectSoir";
  products:Product[] = [
    {id:1,name: "Product 1", description: "Description of Product 1", price: 100, nbrLike:0, quantity:5},
    {id:2,name: "t-shirt 2", description: "Description of Product 2", price: 150, nbrLike:0, quantity:5 },
    {id:3,name: "iphone 3", description: "Description of Product 3", price: 200,  nbrLike:0, quantity:5}
  ]

  save(){
    alert("hiii")
  }
  increment(i:number){
   this.products[i].nbrLike++
  }
  buy(product:Product){

    product.quantity--
  }
}

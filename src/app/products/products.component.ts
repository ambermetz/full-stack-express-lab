import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CartService } from "../cart.service";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  cart: any[];
  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    this.cartService
      .getAllItems()
      .subscribe(response => (this.cart = response));
  }
}

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
  show: boolean = false;
  itemEdit: object;
  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    this.cartService
      .getAllItems()
      .subscribe(response => (this.cart = response));
  }

  addItems(form: NgForm): void {
    this.cartService.addItem(form.value).subscribe(response => {
      this.cart = response;
      // form.reset();
    });
  }

  setItemsToEdit(item: object): void {
    this.itemEdit = item;
    console.log(this.itemEdit);
  }

  updateItems(form: NgForm, id: number): void {
    // console.log(form);
    // console.log(id);
    this.cartService.updateItem(form.value, id).subscribe(response => {
      this.cart = response;
    });
    this.show = !this.show;
  }

  toggleForm(): void {
    this.show = !this.show;
    console.log("this was clicked");
  }

  deleteItem(id: number): void {
    console.log("this was clicked");
    this.cartService.removeItem(id).subscribe(response => {
      this.cart = response;
    });
  }
}

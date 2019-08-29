import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get("http://localhost:8080/cart-items");
  }

  addItem(item: object): Observable<any> {
    return this.http.post("http://localhost:8080/cart-items", item);
  }

  updateItem(updateItem: object, id: number): Observable<any> {
    return this.http.put(`http://localhost:8080/cart-items/${id}`, updateItem);
  }

  removeItem(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/cart-items/${id}`);
  }
}

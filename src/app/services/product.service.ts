import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Product } from "../product/product";

@Injectable()
export class ProductService {
  path = "http://localhost:3000/products";
  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token"
      })
    };
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProducts(categoryId: number): Observable<Array<Product>> {
    let newpath = this.path;
    if (categoryId) {
      newpath += "?categoryId=" + categoryId;
    }
    return this.http.get<Array<Product>>(newpath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu. " + err.error.message;
    } else {
      errorMessage = "Sistemsel bir hata oluştu.";
    }
    return throwError(errorMessage);
  }
}

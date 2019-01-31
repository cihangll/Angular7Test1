import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { AlertifyService } from "../services/alertify.service";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  title: string = "Ürün Listesi";
  filterText: string = "";
  products: Array<Product>;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        return (this.products = data);
      });
    });
  }

  addToCart(product: Product) {
    this.alertifyService.success("Ürün eklendi. " + product.name);
  }
}

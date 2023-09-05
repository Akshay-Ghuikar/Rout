import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
  productId: any;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private ar: ActivatedRoute,
    private route: Router
  ) {
    this.productId = this.ar.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEdit = true;
    }
  }

  ngOnInit() {
    this.createForm();
    this.getProduct();
  }

  createForm() {
    this.productForm = this.fb.group({
      id: [''],
      name: [''],
      category: [''],
      price: [''],
      stock: [''],
      //  'stock':['']
    });
  }
  getProduct() {
    const endpoint = 'products/' + this.productId;
    this.http.getDataFromServer(endpoint).subscribe(
      (el: any) => {
        this.productForm.patchValue(el);
      },
      () => {},
      () => {}
    );
  }

  save() {
    if (this.isEdit) {
      this.update();
    } else {
      this.saveDeatils();
    }
    this.route.navigate(['/products/productList']);
  }

  saveDeatils() {
    this.http.postDataServer('products', this.productForm.value).subscribe(
      (el: any) => {},
      () => {}
    );
    alert('Product Saved Successfully');
  }

  update() {
    const endpoints = 'products/' + this.productId;
    this.http.UpdateData(endpoints, this.productForm.value).subscribe(
      () => {},
      () => {},
      () => {
        alert('Product Updated Successfully');
      }
    );
  }
}

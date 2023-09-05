import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: any;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getDataFromServer('products').subscribe(
      (el: any) => {
        // console.log("el",el,el.length)
        if (el.length > 0) this.productList = el;
      },
      () => {},
      () => {}
    );
  }
  delete(i: number,item:any) {
    const endpoint="products/"+item.id
    this.http.deleteData(endpoint).subscribe(
      
      ()=>{
        
        this.productList.splice(i, 1);
        alert("deleted successfully")
      },
      ()=>{

      },
      ()=>{

      },
    )
  }
}

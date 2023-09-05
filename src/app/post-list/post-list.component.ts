import { Component } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  postList: any = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getDataFromServer('posts').subscribe(
      (el: any) => {
        this.postList = el;
        // console.log(el)
      },
      () => {},
      () => {}
    );
  }
}

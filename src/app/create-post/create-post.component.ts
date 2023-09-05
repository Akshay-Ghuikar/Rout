import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService) {}

  ngOnInit(): void {
    this.createFormStructure();
  }

  createFormStructure() {
    this.postForm = this.fb.group({
      title: ['', []],
      body: ['', []],
      userId: ['1'],
    });
  }

  save() {
    console.log('save', this.postForm.get('body')?.value);
    this.http.postDataServer('posts', this.postForm.value).subscribe(
      (data) => {
        console.log('display', data);
      },
      () => {},
      () => {}
    );
  }
}

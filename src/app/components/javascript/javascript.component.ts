import { Component, OnInit } from '@angular/core';

import { Blog } from 'src/app/models/blog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  blogs: Blog[];
  isLoading: boolean = true;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.refreshBlogs();
  }

  refreshBlogs() {
    this.api.getBlogs().subscribe(
      (response) => {
        this.blogs = response;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}

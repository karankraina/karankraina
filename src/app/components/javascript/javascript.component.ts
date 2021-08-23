import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  blogs: Blog[];
  constructor(private blogsRef: BlogsService) { }

  ngOnInit(): void {
    this.blogs = this.blogsRef.blogs;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id: number;
  blog: Partial<Blog>;

  constructor(
    private route: ActivatedRoute,
    private blogRef: BlogsService
  ) {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.blog = this.blogRef.findBlogById(this.id);
    console.log(this.blog);
  }

}

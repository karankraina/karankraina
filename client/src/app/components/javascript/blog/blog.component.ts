import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id: string;
  isLoading: boolean = true;
  blog: Partial<Blog> = {};

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.id);
    this.refreshBlog();
  }

  refreshBlog() {
    this.api.getBlogById(this.id).subscribe(
      (response) => {
        console.log(response)
        this.blog = response;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}

import { Injectable } from '@angular/core';

import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogStore: Blog[] = [
    {
      id: 1,
      title: "Any Random Big Link Title That Spawns Multiple Lines",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
      content: [
        {
          text: "Some pararaph 1 text here",
          image: ""
        }
      ],
      author: "Karan Raina",
      publishedDate: "August 21, 2021"
    },
    {
      id: 2,
      title: "Any Random Big Link Title That Spawns Multiple Lines 2",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel sodales erat efficitur et. Praesent vel risus ex. Nullam leo enim, scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio a bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus finibus fermentum quis non nisl. Donec in consectetur libero, sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
      content: [
        {
          text: "Some pararaph 2 text here",
          image: ""
        }
      ],
      author: "Karan Raina",
      publishedDate: "August 21, 2021"
    }
  ];

  constructor() {
    console.log({ blogs: this.blogStore });
  }

  public get blogs(): Blog[] {
    return this.blogStore;
  }

  
  findBlogById(id: number ) : Partial<Blog> {
    return this.blogStore.find((blog) => blog.id === id) || {};
  }
  

}

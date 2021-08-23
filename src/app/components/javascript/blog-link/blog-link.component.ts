import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-link',
  templateUrl: './blog-link.component.html',
  styleUrls: ['./blog-link.component.css']
})
export class BlogLinkComponent implements OnInit {

  @Input() title: string;
  @Input() shortDescription: string;
  @Input() id: number;
  @Input() author: string;
  @Input() publishedDate: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sharda-instagram',
  templateUrl: './sharda-instagram.component.html',
  styleUrls: ['./sharda-instagram.component.css']
})
export class ShardaInstagramComponent implements OnInit {

  instgramPosts: any = [];
  isLoading = true;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getInstagramPosts().subscribe(
      (response: any) => {
        this.instgramPosts = response.data;
        this.isLoading = false;
        console.log(this.instgramPosts.filter(item => item.media_type !== 'IMAGE' ))
      }
    )
  }
}

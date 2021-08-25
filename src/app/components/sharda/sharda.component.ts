import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sharda',
  templateUrl: './sharda.component.html',
  styleUrls: ['./sharda.component.css']
})
export class ShardaComponent implements OnInit {
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post, PostsResponse } from './posts.entity';

@Component({
  selector: 'app-view-list',
  standalone: true,
  imports: [],
  templateUrl: './view-list.component.html',
  styleUrl: './view-list.component.scss',
})
export class ViewListComponent {
  data?: Post[];
  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {
    this._httpClient
      .get<PostsResponse>('https://fakestoreapi.com/products?limit=10')
      .subscribe({
        next: (res: any) => {
          this.data = res;
          console.log(this.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { map, filter } from 'rxjs/operators';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host: string = 'https://karankraina-api.vercel.app/api/';

  constructor(
    private http: HttpClient
  ) { }

  getUrlEndpoint(endpoint: string): string {
    return `${this.host}${endpoint}`;
  }

  getBlogs(): Observable<any> {
    return this.http.get(this.getUrlEndpoint('blogs'));
  }

  getBlogById(id: string): Observable<any> {
    return this.http.get(this.getUrlEndpoint('blogs')).pipe(
      map(
        (response: Blog[]) => response.find(blog => blog.id === id)
      )
    )
  }

  getInstagramPosts() {
    return this.http.get(this.getUrlEndpoint('instagram'));
  }
}

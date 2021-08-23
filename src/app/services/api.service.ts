import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { map, filter } from 'rxjs/operators';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  store = {};

  constructor(
    private http: HttpClient
  ) { }

  getBlogs(): Observable<any> {
    return this.http.get('http://localhost:8080/api/blogs');
  }
  getBlogById(id: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/blogs').pipe(
      map(
        (response: Blog[]) => response.find(blog => blog.id === id)
      )
    )
  }
}

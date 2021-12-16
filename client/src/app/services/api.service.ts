import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators';
import { Blog } from '../models/blog';
import { LocalCacheService } from './local-cache.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host: string = 'https://karankraina-api.vercel.app/api/';

  constructor(
    private http: HttpClient,
    private cache: LocalCacheService
  ) { }

  private getUrlEndpoint(endpoint: string): string {
    return `${this.host}${endpoint}`;
  }

  private httpGet(endpoint: string): Observable<any> {
    const dataFromCache = this.cache.getCache(endpoint);
    if (dataFromCache) {
      return  of(dataFromCache);
    }
    const fullUrl = this.getUrlEndpoint(endpoint);
    return this.http.get(fullUrl).pipe(
      map(
        (response: any) => {
          this.cache.setCache(endpoint, response);
          return response;
        }
      )
    )

  }

  getBlogs(): Observable<any> {
    return this.httpGet('blogs');
  }

  getBlogById(id: string): Observable<any> {
    return this.httpGet('blogs').pipe(
      map(
        (response: Blog[]) => response.find(blog => blog.id === id)
      )
    );
  }

  getInstagramPosts() {
    return this.httpGet('instagram');
  }
}

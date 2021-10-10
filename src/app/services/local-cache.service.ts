import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalCacheService {

  constructor() { }

  getCache(key: string){
    const response = localStorage.getItem(key);
    const data = JSON.parse(response);
    if(!data) return null;
    if (!data.expiresAt){
      return null;
    }
    // Time in milliseconds ref - 1970
    const currentTime = (new Date()).getTime();

    if (currentTime > data.expiresAt){
      return null;
    }

    return data.data;
  }

  setCache(key: string, data: any) {
    const expiresAt = +(new Date()).getTime() + 6 * 60 * 60 * 1000;
    const cacheData = JSON.stringify({data, expiresAt});
    localStorage.setItem(key, cacheData);
  }
}

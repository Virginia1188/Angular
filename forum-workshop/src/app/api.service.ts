import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/Theme';
import { Post } from './types/Post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const {appUrl} = environment;
    return  this.http.get<Theme>(`${appUrl}/themes`);
  }
  getPosts(limit?: number) {
    const {appUrl} = environment;
    return  this.http.get<Post>(`${appUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}

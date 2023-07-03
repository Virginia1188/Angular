import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/Post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  isLoading: boolean = true;
  postsList: Post[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: (themes) => {
        this.postsList = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`);

      }
    });
  }
}

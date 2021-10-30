import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { postService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] =[];
  constructor(private postServices: postService) {}

  ngOnInit(): void {
    this.listOfPosts=this.postServices.getPosts();
  }
 
}

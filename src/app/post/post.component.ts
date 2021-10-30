import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { postService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    @Input() post?: Post ;
    @Input() index: number=0;

    constructor(private postServices: postService,private routers: Router) {}

  ngOnInit(): void {
    console.log(this.post)
    console.log(this.index)

  }
  onDelete()
  {
    this.postServices.deletePost(this.index);
    
  }
  onEdit()
  {
    this.routers.navigate(["/post-edit",this.index]);
  }
  likepost()
  {
    this.postServices.likePost(this.index);
  }

}

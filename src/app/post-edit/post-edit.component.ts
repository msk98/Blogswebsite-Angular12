import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { postService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editpost: boolean = false;
  constructor(
    private postServices: postService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title = '';
    let desc = '';
    let imgPath = '';
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        const post = this.postServices.getPost(this.index);

        title = post.title;
        desc = post.description;
        imgPath = post.imagepath;
        this.editpost = true;
      }
    });
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(desc, [
        Validators.minLength(100),
        Validators.required,
      ]),
      imagePath: new FormControl(imgPath, [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.form);
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagepath = this.form.value.imagePath;

    const post: Post = new Post(
      title,
      description,
      imagepath,
      'test@test.com',

      new Date(),
      0
    );
    //calling post service
    this.editpost
      ? this.postServices.updatePost(this.index, post)
      : this.postServices.addPost(post);

    this.router.navigate(['/post-list']);
  }
}

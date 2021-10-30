import { Injectable } from "@angular/core";
import { Post } from "./post.model";
@Injectable({providedIn: 'root'})
export class postService
{
    listOfPosts: Post[] = [
        new Post(
          'Nature',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto exercitationem, autem, aperiam maxime tempora assumenda mollitia repudiandae sunt quia, consequuntur ex! Non ipsa numquam mollitia a doloribus cum quis totam',
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          'test@test.com',
          new Date(),
          0
        ),
        new Post(
          'humpy',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto exercitationem, autem, aperiam maxime tempora assumenda mollitia repudiandae sunt quia, consequuntur ex! Non ipsa numquam mollitia a doloribus cum quis totam',
          'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=',
          'test@test.com',
          new Date(),
          100
        ),
        new Post(
          'Blog 3',
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto exercitationem, autem, aperiam maxime tempora assumenda mollitia repudiandae sunt quia, consequuntur ex! Non ipsa numquam mollitia a doloribus cum quis totam',
          'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
          'test@test.com',
          new Date(),
          400
        ),
      ];

      getPosts(){
          return this.listOfPosts;
      }
      deletePost(index: number)
      {
          this.listOfPosts.splice(index,1);
      }
      addPost(post: Post)
      {
          this.listOfPosts.push(post);
      }
      updatePost(index: number,post: Post)
      {
          this.listOfPosts[index]=post;
      }
      getPost(index: number)
      {
         return  this.listOfPosts[index];
      }
      likePost(index: number)
      {
        this.listOfPosts[index].numberOfLikes+=1;
      }
}
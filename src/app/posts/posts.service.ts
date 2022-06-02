import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../shared/http/http.service';
import { Post } from '../shared/post.model';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  getPosts(): Post[] {
    // throw new Error('Method not implemented.');

    // duplicate of posts
    return this.myPosts.slice();
  }
  postsSelected = new Subject<Post>();
  postListChanged = new Subject<Post[]>();
;

  constructor(private userService: UserService) {}


  // Data sources should be IMMUTABLE
  private myPosts: Post[] = [];

  // READ
  getPost(idx: number) {
    return this.myPosts.slice()[idx];
  }

  // CREATE
  savePost(post: Post) {
    this.myPosts.push(post);
    this.postsSelected.next(post);
    this.postListChanged.next(this.myPosts.slice());
  }

  // UPDATE
  updatePost(idx: number, updatedPostInfo: Post) {
    this.myPosts[idx] = updatedPostInfo;
    this.postListChanged.next(this.myPosts.slice());
  }

  getPostById(id){
    return this.myPosts.find((post:Post) => post.id === id)
  }
  // DELETE
  removePost(id: number) {
    // We found a post at the index we passed in
    this.postsSelected.next(this.getPostById(id));
    // removing the post
    this.myPosts = this.myPosts.filter((post:Post) => post.id != id)

    // Alert those who are subscribed
    // Update posts
    this.setPosts(this.myPosts)
  }


  // method that alert those who are subscribed
  setPosts(posts: Post[] | []) {
    console.log('postd:', posts);

    this.myPosts = posts || [];
    this.postListChanged.next(this.myPosts.slice());
  }

  likePost(post:Post) {
  this.userService.likePost(post);
  }

  dislikePost(post:Post) {
  this.userService.dislikePost(post);
  }

  onSubmitPost(postName, postText) {
    console.log('postName', postName)
    console.log("postText", postText)
    if (postText == '') {
      return;
    } else {
      this.myPosts.push({
        userName: '',
        name: postName,
        content: postText,
        date: new Date(),
      });
      this.postListChanged.next(this.myPosts.slice());
    }
  }
}

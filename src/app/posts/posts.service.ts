import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../shared/post.model';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsSubject = new Subject<Post[]>();

  constructor(private userService: UserService) {}

  posts: Post[] = this.userService.fetchPosts();

  onSubmitPost(postName, postText) {
    if (postText == '') {
      return;
    } else {
      this.posts.push({
        userName: '',
        name: postName,
        content: postText,
        date: new Date(),
      });
      this.postsSubject.next(this.posts.slice());
    }
  }

  getPosts() {
    return this.posts.sort((a, b) => +b.date - +a.date);
  }

  likePost(post:Post) {
  this.userService.likePost(post);
  }

  dislikePost(post:Post) {
  this.userService.dislikePost(post);
  }
}

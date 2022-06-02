
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PostsService } from 'src/app/posts/posts.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(
    private http: HttpClient,
    private postsService: PostsService
  ) {}

  savePost(post) {
    this.http
      .post('https://face-place-frontend.herokuapp.com//api/v1/posts', post)
      .subscribe((res: any) => {
        console.log('Firebase DB Response:', res);
        // Update the view
        if (res.success) {
          this.postsService.savePost(res.payload.book);
        }
      });
  }

  fetchPosts() {
    return this.http
      .get('https://face-place-frontend.herokuapp.com//api/v1/posts/my_posts')
      .pipe(
        tap((res: any) => {
          this.postsService.setPosts(res.payload);
        })
      );
  }

  deletePost(id:number){
    return this.http.delete(`https://face-place-frontend.herokuapp.com//api/v1/posts/${id}`)
  }

  updatePost(post){
    return this.http.put(`https://face-place-frontend.herokuapp.com//api/v1/posts/${post.id}`, post)
  }
}

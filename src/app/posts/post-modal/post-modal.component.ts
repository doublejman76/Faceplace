import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/shared/http/http.service';
import { Post } from 'src/app/shared/post.model';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {
  @Input() creatingPost: boolean;
  @Output() close = new EventEmitter<void>();


  constructor(private postsService: PostsService,
              private httpService: HttpService ) { }

  ngOnInit(): void {
  }

  onSubmitPost(postName: string, postText: string){
    // this.httpService.savePost({content: postText });
    this.httpService.fetchPosts().subscribe((posts:Post[])=>{
      console.log(posts)
    });
    this.close.emit();
  }


  onCloseModal() {
    this.close.emit();
  }

  postText = new FormControl('');
  postName = new FormControl('');


}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {
  @Input() creatingPost: boolean;
  @Output() close = new EventEmitter<void>();


  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onSubmitPost(postName: string, postText: string){
    this.postsService.onSubmitPost(postName, postText);
    this.close.emit();
  }


  onCloseModal() {
    this.close.emit();
  }

  postText = new FormControl('');
  postName = new FormControl('');


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  creatingPost = false;

  constructor() { }

  ngOnInit(): void {
  }

  showPostForm() {
    this.creatingPost = true;
  }

  closePostForm() {
    this.creatingPost = false;
  }

}

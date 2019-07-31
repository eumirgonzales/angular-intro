import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './services/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  posts;
  postData = {};

  // postTitle;
  // body;

  constructor(private http: HttpClient, private postService: PostService) {}
  // private http: HttpClient
  // 5 assign in constructor

  showAlert(event) {
    console.log(event);
    alert(event.firstName + ' ' + event.lastName);
  }

  getRequest() {
    console.log('Get request');
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(post => {
        this.posts = post;
      });
  }

  // getRequest() {
  //   this.postService.getData().subscribe(posts => {
  //     this.posts = posts;
  //   });
  // }

  deletePosts() {
    this.posts = null;
    this.postData = {};
  }

  postRequest() {
    var postData = {
      title: 'this is a title',
      body: 'this is the body'
    };
    this.postService.postData(postData);
  }

  // postRequest(postTitle, body) {
  //   var postData = {
  //     title: postTitle,
  //     body: body
  //   };
  //   this.postService.postData(postData);
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  postData(postData) {
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', postData)
      .subscribe(data => {
        console.log(data);
        // this.postData = data;
      });
  }

  getData() {}
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({ providedIn: 'root' })
// export class PostService {
//   constructor(private http: HttpClient) {}

//   getData() {
//     console.log('GET request');
//     return this.http.get('https://jsonplaceholder.typicode.com/posts');
//   }

//   postData(postData) {
//     console.log('POST request');
//     this.http
//       .post('https://jsonplaceholder.typicode.com/posts', postData)
//       .subscribe(response => {
//         console.log(response);
//       });
//   }
// }

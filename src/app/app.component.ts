import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  code: string;
  provider: string;
  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

  handleClick() {
    console.log(19, this.code);
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    // this.http.post('https://github.com/login/oauth/access_token', {
    this.http.post(`http://localhost:4000/auth/${this.provider}/access_token`, {
      code: this.code,
    }).subscribe(d => {
      console.log(24, d);
    }, e => console.log(25, e));
  }
}

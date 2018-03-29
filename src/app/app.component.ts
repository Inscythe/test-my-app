import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get Users From API (TEST)';
  private apiURL = 'http://localhost/zugentv2_api/api/fetch_users.php';
  data: any = [];

  constructor(private http: Http) {
    console.log('Get Users From API');
    this.getUsers();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiURL).map((res: Response) => res.json())
  }

  getUsers() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}

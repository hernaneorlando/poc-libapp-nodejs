import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Author } from './authors/author';
import { User } from './users/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'LibApp';
  authors: Author[] = [];
  users: User[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log(environment);
    this.httpClient
      .get<Author[]>(`${environment.apiUrl}/authors`)
      .subscribe(response => {
        this.authors = response;
      });

      this.httpClient
      .get<User[]>(`${environment.apiUrl}/users`)
      .subscribe(response => {
        this.users = response;
      });
  }
}

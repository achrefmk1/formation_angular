import { Component } from '@angular/core';

interface IUser  {
  name: string,
  job: string,
  phone: string,
  email: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user : IUser = {
    name : "Achref",
    job : "Fullstack JS",
    phone : "55667788",
    email : "achref@gmail.com"
  }
}

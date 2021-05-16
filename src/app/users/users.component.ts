import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }
public logout(){
this._authService.logout();
}
}

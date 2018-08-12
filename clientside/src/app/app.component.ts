import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
	register;		
	title = 'my Full-Stack POC';

	constructor(private userService: UserService){}

	ngOnInit(){
		this.register = {
			username : '',
			passowrd : '',
			email : ''
		};	
	}

	registerUser() {
		this.userService.registerNewUser(this.register).subscribe(
			response => {
				console.log('User' + this.register.username + 'has been created')
			},
			error => console.log('error', error)
		);
	}
}

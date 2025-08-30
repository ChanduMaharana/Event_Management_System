import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string =  '';

  constructor(private router: Router){}

  login(){
    const name = 'admin';
    const pwd = 'admin@123';
    if(this.username === name && this.password === pwd){
      this.router.navigate(['/dashboard']);
    }else{
      this.errorMessage = 'Invalid username or password!';
    }
  }
}

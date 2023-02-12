import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'admin@mail.com' && this.password === 'admin') {
      this.router.navigateByUrl('/admin');
    } else if (this.email === 'user@mail.com' && this.password === 'user') {
      this.router.navigate(['/user']);
    } else {
      console.log('Incorrect email or password.');
    }
  }
}

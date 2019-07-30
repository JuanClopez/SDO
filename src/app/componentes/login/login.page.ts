import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

<<<<<<< Updated upstream
=======
  onSubmitLogin()
  {
    
    this.authService.login(this.email, this.password);

  }

>>>>>>> Stashed changes
}

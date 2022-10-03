import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showForm: boolean = false;
  formButtonName: string = 'Show form'

  constructor(private router: Router) {}

  toggleForm() {
    this.showForm = !this.showForm;
    
    if (this.showForm) 
      this.formButtonName = 'Hide form'
    else 
      this.formButtonName = 'Show form';
  }

  gotoBattleChips() {
    this.router.navigateByUrl("/battlechips");
  }
}

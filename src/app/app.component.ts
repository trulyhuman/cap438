import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cap438';
  message: string;
  valid: Boolean;
  show: boolean;



  checkAccount(accountNumber) {
    var value = accountNumber.value;


    if (value.length == 14) {
      this.message = 'Account number is equal to 14 digit!';
      this.valid = true;

    }
    else if (value.length == 0) {
      this.message = 'Account number can not be empty!';
      this.valid = false;
    }
    else if (value.length < 14) {
      this.message = 'Account number can not be smaller then 14 digit!';
      this.valid = false;
    }
    else if (value.length > 14) {
      this.message = 'Account number can not be greater then 14 digit!';
      this.valid = false;
    }

  }

  checkBranch(branch) {
    console.log(branch.value)
    var inputValue = branch.value;
    if (inputValue === 'Jalandhar' || inputValue ===
      'jalandhar' || inputValue ===
      'Ludhiana' || inputValue ===
      'ludhiana' || inputValue ===
      'Hoshiarpur' || inputValue ===
      'Hoshiarpur') {

      this.message = 'Correct branch entered!';
      this.valid = true;
    }
    else if (inputValue.length == 0) {
      this.message = ' Input field cannot be empty';
      this.valid = false;

    }
    else {
      this.message = 'Branch did not matched!';
      this.valid = false;
    }
  }

}

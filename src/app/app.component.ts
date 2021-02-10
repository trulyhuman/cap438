import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cap438';
  message = undefined;
  valid: Boolean;
  show: boolean;

  account;
  branchName;
  check;
  cashDeposited;
  CashierName


  // for question 1 subpart a
  checkAccount(accountNumber) {
    var value = accountNumber.value;

    if (value.length == 14) {
      this.message = 'Account number is equal to 14 digit!';
      this.valid = true;

    }
    
    else if (value.length < 14) {
      this.message = 'Account number can not be smaller then 14 digit!';
      this.valid = false;
    }
    else if (value.length > 14) {
      this.message = 'Account number can not be greater then 14 digit!';
      this.valid = false;
    }
    else {
      this.message = 'Entered value belong to invalid case!';
      this.valid = false;
    }

  }


  // for question 1 subpart b
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


  // for question 1 subpart c
  checkNo(chechNumber) {

  }

}

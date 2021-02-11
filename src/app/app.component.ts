import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cap438';
  message = undefined;
  valid: Boolean;
  show = undefined;



  account;
  branchName;
  selectBranch;
  chequeNo;
  cashDeposited;
  CashierName;
  age;
  year;
  baseDays;
  alertMessage(mess, caseValue) {
    this.message = mess;
    this.valid = caseValue;
  }
  // for question 1 subpart a
  checkAccount(accountNumber) {
    var value = accountNumber.value;

    if (value.length == 14) {
      this.alertMessage('Account number is equal to 14 digit!', true);
    } else if (value.length < 14) {
      this.alertMessage(
        'Account number can not be smaller then 14 digit!',
        false
      );
    } else if (value.length > 14) {
      this.alertMessage(
        'Account number can not be greater then 14 digit!',
        false
      );
    } else {
      this.alertMessage('Entered value belong to invalid case!', false);
    }
  }

  // for question 1 subpart b
  checkBranch(branch) {
    console.log(branch.value);
    var inputValue = branch.value;
    if (
      inputValue === 'Jalandhar' ||
      inputValue === 'jalandhar' ||
      inputValue === 'Ludhiana' ||
      inputValue === 'ludhiana' ||
      inputValue === 'Hoshiarpur' ||
      inputValue === 'Hoshiarpur'
    ) {
      this.alertMessage('Accepted! correct branch entered!', true);
    } else {
      this.alertMessage(
        'Branch did not matched please enter a valid branch!',
        false
      );
    }
  }

  // for question 1 subpart c
  checkNo(chequeNumber) {
    var chequeNo = chequeNumber.value;

    if (chequeNo.length === 6) {
      this.alertMessage('Cheque Number accepted!', true);
    } else if (chequeNo.length < 6) {
      this.alertMessage(
        'Cheque Number cannot be smaller than 6 digits !',
        false
      );
    } else if (chequeNo.length > 6) {
      this.alertMessage(
        'Cheque Number cannot be greater than 6 digits !',
        false
      );
    } else {
      this.alertMessage('This input is not accepted!', false);
    }
  }

  // for questiom 1 subpart d
  cashDeposit(cashInput) {
    var cash = cashInput.value;

    if (cash > 0 && cash <= 5000) {
      this.alertMessage('Cash amount accepted!', true);
    } else if (cash > 5000) {
      this.alertMessage('Cash amount cannot exceed 5000 !', false);
    } else if (cash < 0) {
      this.alertMessage('Cash amount cannot be less than 1 !', false);
    } else {
      this.alertMessage('Input no accepted please enter valid input!', false);
    }
  }

  // for questiom 1 subpart d
  checkCashier(cashierInput) {
    var input = cashierInput.value;
    var numeric = input.match(/[0-9]/g);
    var splChar = input.match(/[!@#$%^&*(),.?":{}|<>]/g);
    console.log(input.length, numeric, splChar);

    if (
      input.length >= 3 &&
      input.length <= 30 &&
      numeric == null &&
      splChar == null
    ) {
      this.alertMessage('Name accepted!', true);
    }
    else if (numeric != null || splChar != null) {
      if (numeric != null && splChar != null) {
        this.alertMessage('Name Cannot cantain numbers or special characters', false);

      }
      else if (numeric != null) {
        this.alertMessage('Name Cannot cantain numbers', false);
      }
      else if (splChar != null) {
        this.alertMessage('Name Cannot cantain special characters', false);
      }
    }

    else if (input.length < 3) {
      this.alertMessage('Name length less than 3 is Not allowed!', false);
    }

    else if (input.length > 30) {
      this.alertMessage('Name length Greater than 3 is Not allowed!', false);

    }
  }

  decisionTable(Age, Year) {
    var age = Age.value;
    var year = Year.value;
    this.baseDays = 22;
    this.valid = true;


    if (age >= 60 || year >= 30) {
      this.baseDays = this.baseDays + 3;

    }

    if (age < 18 || age >= 60 || year >= 30) {
      this.baseDays = this.baseDays + 5;
    }
    else if ((age >= 45 && age < 60) || (year >= 15 && year < 30)) {
      this.baseDays = this.baseDays + 2;
    }


    this.message = 'Your total Number of vacations ->' + this.baseDays;

    if (age < 15 || age > 70) {
      this.message = 'Age can not be smaller than 15 or greater than 70'
      this.valid = false;
    }
    if (year < 1 || year > 50) {
      this.message = 'Year can not be smaller than 1 or greater than 50'
      this.valid = false;
    }

  }
}

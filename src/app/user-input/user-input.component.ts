import { investmentService } from './../../investment-results.service';
import { Component, EventEmitter, inject, input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {

  private investService = inject(investmentService)

  enteredIntitalInv = signal('0');
  enteredAnualInv = signal('0');
  enteredExpectedRtn = signal('5');
  enteredDuration = signal('10');

  passIni() {
    this.investService.setValues({
      enteredIntitalInv: +this.enteredIntitalInv(),
      enteredAnualInv: +this.enteredAnualInv(),
      enteredExpectedRtn: +this.enteredExpectedRtn(),
      enteredDuration: +this.enteredDuration(),
    })
    // this.passUserVal.emit({
    //   enteredIntitalInv: this.enteredIntitalInv,
    //   enteredAnualInv: this.enteredAnualInv,
    //   enteredExpectedRtn: this.enteredExpectedRtn,
    //   enteredDuration: this.enteredDuration,
    // });
    this.investService.calculateInvest()
  }
}

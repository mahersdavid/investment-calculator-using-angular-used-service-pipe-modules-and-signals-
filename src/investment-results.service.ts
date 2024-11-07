import { Injectable, signal } from "@angular/core";
import { type userModel } from "./app/user-input/user.model";
import { investModule } from "./investment-results.model";

@Injectable({providedIn : 'root'})
export class investmentService{
    resultData = signal<investModule[] | undefined>(undefined)
    enteredIntitalInv = 0
    enteredAnualInv = 0
    enteredExpectedRtn = 0
    enteredDuration = 0

    setValues(useVal : userModel){
      this.enteredIntitalInv = useVal.enteredIntitalInv
      this.enteredAnualInv = useVal.enteredAnualInv
      this.enteredExpectedRtn = useVal.enteredExpectedRtn
      this.enteredDuration = useVal.enteredDuration
    }

    calculateInvest(){
      let investmentValue = this.enteredIntitalInv
      const annualData = []
      for (let i = 0; i < this.enteredDuration; i++) {
        const year = i + 1;
        const interestEarnedInYear = this.enteredIntitalInv * (this.enteredExpectedRtn / 100);
        investmentValue += interestEarnedInYear + this.enteredAnualInv;
        const totalInterest =
        investmentValue - this.enteredAnualInv * year - this.enteredIntitalInv;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: this.enteredIntitalInv,
          enteredAnualInv: this.enteredAnualInv,
          totalInterest: totalInterest,
          totalAmountInvested: this.enteredIntitalInv + this.enteredAnualInv * year,
        });
      }

      return this.resultData.set(annualData)
    }
}


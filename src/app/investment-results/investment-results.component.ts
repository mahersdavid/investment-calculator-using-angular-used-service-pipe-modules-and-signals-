import { Component, computed, inject, Input } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { investmentService } from '../../investment-results.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investService = inject(investmentService)

  // get results(){
  //   return this.investService.resultData
  // }

  results = computed(()=>this.investService.resultData())
}

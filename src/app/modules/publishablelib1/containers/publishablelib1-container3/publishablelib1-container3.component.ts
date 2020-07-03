import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icann-test-publishablelib1-container3',
  templateUrl: './publishablelib1-container3.component.html',
  styleUrls: ['./publishablelib1-container3.component.scss']
})
export class Publishablelib1Container3Component implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

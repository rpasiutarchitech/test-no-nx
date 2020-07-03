import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icann-test-lib22-container3',
  templateUrl: './lib22-container3.component.html',
  styleUrls: ['./lib22-container3.component.scss']
})
export class Lib22Container3Component implements OnInit {
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

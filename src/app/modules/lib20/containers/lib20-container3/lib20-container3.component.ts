import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icann-test-lib20-container3',
  templateUrl: './lib20-container3.component.html',
  styleUrls: ['./lib20-container3.component.scss']
})
export class Lib20Container3Component implements OnInit {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icann-test-lib14-container3',
  templateUrl: './lib14-container3.component.html',
  styleUrls: ['./lib14-container3.component.scss']
})
export class Lib14Container3Component implements OnInit {
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

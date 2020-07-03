import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icann-test-lib21-container3',
  templateUrl: './lib21-container3.component.html',
  styleUrls: ['./lib21-container3.component.scss']
})
export class Lib21Container3Component implements OnInit {
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

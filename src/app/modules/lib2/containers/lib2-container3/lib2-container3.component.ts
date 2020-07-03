import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icann-test-lib2-container3',
  templateUrl: './lib2-container3.component.html',
  styleUrls: ['./lib2-container3.component.scss']
})
export class Lib2Container3Component implements OnInit {
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

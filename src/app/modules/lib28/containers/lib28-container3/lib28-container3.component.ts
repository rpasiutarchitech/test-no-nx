import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icann-test-lib28-container3',
  templateUrl: './lib28-container3.component.html',
  styleUrls: ['./lib28-container3.component.scss']
})
export class Lib28Container3Component implements OnInit {
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

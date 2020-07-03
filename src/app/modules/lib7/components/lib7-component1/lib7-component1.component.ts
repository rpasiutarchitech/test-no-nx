import { Component, OnInit } from '@angular/core';
import { Section } from '../../containers/lib7-container4/lib7-container4.component';

@Component({
  selector: 'icann-test-lib7-component1',
  templateUrl: './lib7-component1.component.html',
  styleUrls: ['./lib7-component1.component.scss']
})
export class Lib7Component1Component implements OnInit {
  step = 0;
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



  constructor() {
  }

  ngOnInit(): void {
  }

}

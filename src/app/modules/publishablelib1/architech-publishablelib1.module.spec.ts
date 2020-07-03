import { async, TestBed } from '@angular/core/testing';
import { ArchitechPublishablelib1Module } from './architech-publishablelib1.module';

describe('ArchitechPublishablelib1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechPublishablelib1Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechPublishablelib1Module).toBeDefined();
  });
});

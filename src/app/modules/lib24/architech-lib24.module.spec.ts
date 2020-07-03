import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib24Module } from './architech-lib24.module';

describe('ArchitechLib24Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib24Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib24Module).toBeDefined();
  });
});

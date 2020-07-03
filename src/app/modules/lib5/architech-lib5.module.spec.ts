import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib5Module } from './architech-lib5.module';

describe('ArchitechLib5Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib5Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib5Module).toBeDefined();
  });
});

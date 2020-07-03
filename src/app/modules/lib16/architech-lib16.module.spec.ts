import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib16Module } from './architech-lib16.module';

describe('ArchitechLib16Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib16Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib16Module).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib20Module } from './architech-lib20.module';

describe('ArchitechLib20Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib20Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib20Module).toBeDefined();
  });
});

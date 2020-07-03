import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib19Module } from './architech-lib19.module';

describe('ArchitechLib19Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib19Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib19Module).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib4Module } from './architech-lib4.module';

describe('ArchitechLib4Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib4Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib4Module).toBeDefined();
  });
});

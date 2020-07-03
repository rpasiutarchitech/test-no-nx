import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib10Module } from './architech-lib10.module';

describe('ArchitechLib10Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib10Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib10Module).toBeDefined();
  });
});

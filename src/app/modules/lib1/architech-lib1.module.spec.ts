import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib1Module } from './architech-lib1.module';

describe('ArchitechLib1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib1Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib1Module).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib14Module } from './architech-lib14.module';

describe('ArchitechLib14Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib14Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib14Module).toBeDefined();
  });
});

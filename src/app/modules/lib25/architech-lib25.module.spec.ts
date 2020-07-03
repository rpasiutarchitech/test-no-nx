import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib25Module } from './architech-lib25.module';

describe('ArchitechLib25Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib25Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib25Module).toBeDefined();
  });
});

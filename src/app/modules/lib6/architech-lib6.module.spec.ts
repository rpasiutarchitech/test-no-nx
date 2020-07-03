import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib6Module } from './architech-lib6.module';

describe('ArchitechLib6Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib6Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib6Module).toBeDefined();
  });
});

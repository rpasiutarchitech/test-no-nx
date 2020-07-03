import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib17Module } from './architech-lib17.module';

describe('ArchitechLib17Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib17Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib17Module).toBeDefined();
  });
});

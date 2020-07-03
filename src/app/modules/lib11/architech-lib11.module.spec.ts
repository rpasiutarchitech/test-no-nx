import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib11Module } from './architech-lib11.module';

describe('ArchitechLib11Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib11Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib11Module).toBeDefined();
  });
});

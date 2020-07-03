import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib22Module } from './architech-lib22.module';

describe('ArchitechLib22Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib22Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib22Module).toBeDefined();
  });
});

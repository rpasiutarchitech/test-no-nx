import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib18Module } from './architech-lib18.module';

describe('ArchitechLib18Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib18Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib18Module).toBeDefined();
  });
});

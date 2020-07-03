import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib13Module } from './architech-lib13.module';

describe('ArchitechLib13Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib13Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib13Module).toBeDefined();
  });
});

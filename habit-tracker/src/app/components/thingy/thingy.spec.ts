import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thingy } from './thingy';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Thingy', () => {
  let component: Thingy;
  let fixture: ComponentFixture<Thingy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thingy],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thingy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

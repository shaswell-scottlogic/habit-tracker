import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thingy } from './thingy';

describe('Thingy', () => {
  let component: Thingy;
  let fixture: ComponentFixture<Thingy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thingy]
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

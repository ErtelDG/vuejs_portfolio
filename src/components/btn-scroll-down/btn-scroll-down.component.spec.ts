import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnScrollDownComponent } from './btn-scroll-down.component';

describe('BtnScrollDownComponent', () => {
  let component: BtnScrollDownComponent;
  let fixture: ComponentFixture<BtnScrollDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnScrollDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnScrollDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

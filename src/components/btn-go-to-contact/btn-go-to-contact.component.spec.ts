import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGoToContactComponent } from './btn-go-to-contact.component';

describe('BtnGoToContactComponent', () => {
  let component: BtnGoToContactComponent;
  let fixture: ComponentFixture<BtnGoToContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnGoToContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnGoToContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

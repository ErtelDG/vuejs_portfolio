import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePersonComponent } from './image-person.component';

describe('ImagePersonComponent', () => {
  let component: ImagePersonComponent;
  let fixture: ComponentFixture<ImagePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

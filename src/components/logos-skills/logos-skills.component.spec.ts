import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosSkillsComponent } from './logos-skills.component';

describe('LogosSkillsComponent', () => {
  let component: LogosSkillsComponent;
  let fixture: ComponentFixture<LogosSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

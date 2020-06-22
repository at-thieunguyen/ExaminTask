import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAdvisorsComponent } from './experience-advisors.component';

describe('ExperienceAdvisorsComponent', () => {
  let component: ExperienceAdvisorsComponent;
  let fixture: ComponentFixture<ExperienceAdvisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAdvisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

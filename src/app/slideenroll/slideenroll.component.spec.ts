import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideenrollComponent } from './slideenroll.component';

describe('SlideenrollComponent', () => {
  let component: SlideenrollComponent;
  let fixture: ComponentFixture<SlideenrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideenrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

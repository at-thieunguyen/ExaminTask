import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactorComponent } from './fun-factor.component';

describe('FunFactorComponent', () => {
  let component: FunFactorComponent;
  let fixture: ComponentFixture<FunFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

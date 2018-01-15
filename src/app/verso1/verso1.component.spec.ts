import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Verso1Component } from './verso1.component';

describe('Verso1Component', () => {
  let component: Verso1Component;
  let fixture: ComponentFixture<Verso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verso1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Verso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

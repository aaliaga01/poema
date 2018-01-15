import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Verso2Component } from './verso2.component';

describe('Verso2Component', () => {
  let component: Verso2Component;
  let fixture: ComponentFixture<Verso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verso2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Verso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

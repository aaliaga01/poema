import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuervoimgComponent } from './cuervoimg.component';

describe('CuervoimgComponent', () => {
  let component: CuervoimgComponent;
  let fixture: ComponentFixture<CuervoimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuervoimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuervoimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

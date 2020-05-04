import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivColorComponent } from './indiv-color.component';

describe('IndivColorComponent', () => {
  let component: IndivColorComponent;
  let fixture: ComponentFixture<IndivColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

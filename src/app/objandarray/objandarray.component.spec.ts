import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjandarrayComponent } from './objandarray.component';

describe('ObjandarrayComponent', () => {
  let component: ObjandarrayComponent;
  let fixture: ComponentFixture<ObjandarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjandarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjandarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

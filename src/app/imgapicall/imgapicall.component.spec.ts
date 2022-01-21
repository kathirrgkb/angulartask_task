import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgapicallComponent } from './imgapicall.component';

describe('ImgapicallComponent', () => {
  let component: ImgapicallComponent;
  let fixture: ComponentFixture<ImgapicallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgapicallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgapicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

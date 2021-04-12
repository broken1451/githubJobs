import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcImgComponent } from './searc-img.component';

describe('SearcImgComponent', () => {
  let component: SearcImgComponent;
  let fixture: ComponentFixture<SearcImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursesettsComponent } from './bursesetts.component';

describe('BursesettsComponent', () => {
  let component: BursesettsComponent;
  let fixture: ComponentFixture<BursesettsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursesettsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursesettsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

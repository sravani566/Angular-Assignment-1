import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbicmpComponent } from './hobbicmp.component';

describe('HobbicmpComponent', () => {
  let component: HobbicmpComponent;
  let fixture: ComponentFixture<HobbicmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbicmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbicmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

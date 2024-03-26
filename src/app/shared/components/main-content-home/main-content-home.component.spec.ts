import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentHomeComponent } from './main-content-home.component';

describe('MainContentHomeComponent', () => {
  let component: MainContentHomeComponent;
  let fixture: ComponentFixture<MainContentHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContentHomeComponent]
    });
    fixture = TestBed.createComponent(MainContentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

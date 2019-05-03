import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XareltoclaimsComponent } from './xareltoclaims.component';

describe('XareltoclaimsComponent', () => {
  let component: XareltoclaimsComponent;
  let fixture: ComponentFixture<XareltoclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XareltoclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XareltoclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

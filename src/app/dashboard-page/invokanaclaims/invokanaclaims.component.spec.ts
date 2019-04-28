import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvokanaclaimsComponent } from './invokanaclaims.component';

describe('InvokanaclaimsComponent', () => {
  let component: InvokanaclaimsComponent;
  let fixture: ComponentFixture<InvokanaclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvokanaclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvokanaclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

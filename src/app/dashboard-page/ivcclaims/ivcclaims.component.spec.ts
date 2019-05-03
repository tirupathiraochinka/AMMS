import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvcclaimsComponent } from './ivcclaims.component';

describe('IvcclaimsComponent', () => {
  let component: IvcclaimsComponent;
  let fixture: ComponentFixture<IvcclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvcclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvcclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrincipaleComponent } from './new-principale.component';

describe('NewPrincipaleComponent', () => {
  let component: NewPrincipaleComponent;
  let fixture: ComponentFixture<NewPrincipaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPrincipaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

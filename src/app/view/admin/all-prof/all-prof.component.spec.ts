import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfComponent } from './all-prof.component';

describe('AllProfComponent', () => {
  let component: AllProfComponent;
  let fixture: ComponentFixture<AllProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

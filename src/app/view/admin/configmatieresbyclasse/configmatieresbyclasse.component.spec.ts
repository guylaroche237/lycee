import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmatieresbyclasseComponent } from './configmatieresbyclasse.component';

describe('ConfigmatieresbyclasseComponent', () => {
  let component: ConfigmatieresbyclasseComponent;
  let fixture: ComponentFixture<ConfigmatieresbyclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigmatieresbyclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigmatieresbyclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresbyclasseComponent } from './matieresbyclasse.component';

describe('MatieresbyclasseComponent', () => {
  let component: MatieresbyclasseComponent;
  let fixture: ComponentFixture<MatieresbyclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresbyclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatieresbyclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

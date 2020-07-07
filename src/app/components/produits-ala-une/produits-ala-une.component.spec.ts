import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsALaUneComponent } from './produits-ala-une.component';

describe('ProduitsALaUneComponent', () => {
  let component: ProduitsALaUneComponent;
  let fixture: ComponentFixture<ProduitsALaUneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsALaUneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsALaUneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

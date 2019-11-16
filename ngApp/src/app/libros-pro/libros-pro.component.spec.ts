import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosProComponent } from './libros-pro.component';

describe('LibrosProComponent', () => {
  let component: LibrosProComponent;
  let fixture: ComponentFixture<LibrosProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

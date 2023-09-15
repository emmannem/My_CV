import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilsComponent } from './skils.component';

describe('SkilsComponent', () => {
  let component: SkilsComponent;
  let fixture: ComponentFixture<SkilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [SkilsComponent]
=======
      declarations: [SkilsComponent],
>>>>>>> 0523303de6f6d0c8bd6f4979ed9163764b4e929f
    });
    fixture = TestBed.createComponent(SkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  it('should create', () => {
=======
  xit('should create', () => {
>>>>>>> 0523303de6f6d0c8bd6f4979ed9163764b4e929f
    expect(component).toBeTruthy();
  });
});

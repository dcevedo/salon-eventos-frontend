import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCreateComponent } from '../reservations/reservation-create.component';

describe('ReservationCreateComponent', () => {
  let component: ReservationCreateComponent;
  let fixture: ComponentFixture<ReservationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

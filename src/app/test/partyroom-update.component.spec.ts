import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyroomUpdateComponent } from '../partyrooms/partyroom-update.component';

describe('PartyroomUpdateComponent', () => {
  let component: PartyroomUpdateComponent;
  let fixture: ComponentFixture<PartyroomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyroomUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyroomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

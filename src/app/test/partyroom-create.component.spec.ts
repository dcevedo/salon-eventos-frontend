import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyroomCreateComponent } from '../partyrooms/partyroom-create.component';

describe('PartyroomCreateComponent', () => {
  let component: PartyroomCreateComponent;
  let fixture: ComponentFixture<PartyroomCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyroomCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyroomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

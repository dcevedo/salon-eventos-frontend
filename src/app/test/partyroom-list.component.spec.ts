import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyroomListComponent } from '../partyrooms/partyroom-list.component';

describe('PartyroomListComponent', () => {
  let component: PartyroomListComponent;
  let fixture: ComponentFixture<PartyroomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyroomListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

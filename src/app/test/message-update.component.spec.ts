import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageUpdateComponent } from './message-update.component';

describe('MessageUpdateComponent', () => {
  let component: MessageUpdateComponent;
  let fixture: ComponentFixture<MessageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

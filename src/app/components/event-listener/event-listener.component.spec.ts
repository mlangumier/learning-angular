import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListenerComponent } from './event-listener.component';

describe('EventListenerComponent', () => {
  let component: EventListenerComponent;
  let fixture: ComponentFixture<EventListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventListenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnansweredListComponent } from './unanswered-list.component';

describe('UnansweredListComponent', () => {
  let component: UnansweredListComponent;
  let fixture: ComponentFixture<UnansweredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnansweredListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnansweredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

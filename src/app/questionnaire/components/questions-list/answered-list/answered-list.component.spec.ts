import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredListComponent } from './answered-list.component';

describe('AnsweredListComponent', () => {
  let component: AnsweredListComponent;
  let fixture: ComponentFixture<AnsweredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsweredListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsweredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

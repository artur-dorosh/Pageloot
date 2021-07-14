import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionManagerListItemComponent } from './question-manager-list-item.component';

describe('QuestionManagerListItemComponent', () => {
  let component: QuestionManagerListItemComponent;
  let fixture: ComponentFixture<QuestionManagerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionManagerListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionManagerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

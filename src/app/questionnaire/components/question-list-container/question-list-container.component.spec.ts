import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListContainerComponent } from './question-list-container.component';

describe('QuestionListContainerComponent', () => {
  let component: QuestionListContainerComponent;
  let fixture: ComponentFixture<QuestionListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

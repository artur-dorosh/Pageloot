import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionManagerListComponent } from './question-manager-list.component';

describe('QuestionManagerListComponent', () => {
  let component: QuestionManagerListComponent;
  let fixture: ComponentFixture<QuestionManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionManagerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

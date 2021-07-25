import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from '../../../interfaces/question.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionListItemComponent implements OnInit {
  @Input() question: IQuestion;

  @Output() applyAnswer: EventEmitter<IQuestion> = new EventEmitter<IQuestion>();
  @Output() rollbackQuestion: EventEmitter<IQuestion> = new EventEmitter<IQuestion>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onApplyAnswer(): void {
    this.applyAnswer.emit({
      ...this.question,
      finalAnswer: this.question.type === 'single'
        ? [this.form.get('singleAnswer').value]
        : this.question.type === 'open'
          ? [this.form.get('openAnswer').value]
          : this.form.get('multipleAnswer').value,
      answered: true,
      answeredDate: new Date().toString(),
    })
  }

  onRollbackQuestion(): void {
    this.rollbackQuestion.emit({
      ...this.question,
      answered: false,
      finalAnswer: null,
      answeredDate: null,
    })
  }

  private initForm(): void {
    this.form = this.fb.group({
      singleAnswer: [null, Validators.required],
      multipleAnswer: [null, Validators.required],
      openAnswer: [null, [Validators.required, Validators.maxLength(255)]]
    })
  }
}

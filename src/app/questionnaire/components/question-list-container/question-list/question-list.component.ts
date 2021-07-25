import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionListComponent {
  @Input() questions: IQuestion[];

  @Output() applyAnswer: EventEmitter<IQuestion> = new EventEmitter<IQuestion>();
  @Output() rollbackQuestion: EventEmitter<IQuestion> = new EventEmitter<IQuestion>();

  onApplyAnswer(question: IQuestion): void {
    this.applyAnswer.emit(question);
  }

  onRollbackQuestion(question: IQuestion): void {
    this.rollbackQuestion.emit(question);
  }
}

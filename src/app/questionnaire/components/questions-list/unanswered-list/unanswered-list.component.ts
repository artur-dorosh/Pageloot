import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-unanswered-list',
  templateUrl: './unanswered-list.component.html',
  styleUrls: ['./unanswered-list.component.scss']
})
export class UnansweredListComponent {
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

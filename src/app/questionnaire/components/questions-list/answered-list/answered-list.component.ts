import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-answered-list',
  templateUrl: './answered-list.component.html',
  styleUrls: ['./answered-list.component.scss']
})
export class AnsweredListComponent {
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

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-question-manager-list',
  templateUrl: './question-manager-list.component.html',
  styleUrls: ['./question-manager-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionManagerListComponent {
  @Input() questions: IQuestion[];

  @Output() deleteQuestion: EventEmitter<string> = new EventEmitter<string>();

  onDeleteQuestion(id: string): void {
    this.deleteQuestion.emit(id);
  }
}

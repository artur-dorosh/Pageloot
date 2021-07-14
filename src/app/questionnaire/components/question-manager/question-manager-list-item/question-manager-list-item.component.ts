import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-question-manager-list-item',
  templateUrl: './question-manager-list-item.component.html',
  styleUrls: ['./question-manager-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionManagerListItemComponent {
  @Input() question: IQuestion;

  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  onDelete(): void {
    this.delete.emit(this.question.id);
  }
}

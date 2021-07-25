import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';
import { QuestionsService } from '../../services/questions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionManagerComponent {
  questions$: Observable<IQuestion[]> = this.questionsService.getQuestions();

  constructor(private questionsService: QuestionsService) { }

  deleteQuestion(id: string): void {
    this.questionsService.deleteQuestion(id);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';
import { QuestionsService } from '../../services/questions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-list-container',
  templateUrl: './question-list-container.component.html',
  styleUrls: ['./question-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionListContainerComponent {
  questions$: Observable<IQuestion[]> = this.questionsService.getQuestions();

  constructor(private questionsService: QuestionsService) { }

  changeAnswer(question: IQuestion): void {
    this.questionsService.updateQuestion(question);
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { IQuestion } from '../../interfaces/question.interface';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsListComponent {
  questions: IQuestion[] = this.questionsService.getQuestions();

  constructor(private questionsService: QuestionsService) { }

  changeAnswer(question: IQuestion): void {
    this.questions = this.questions.map((item: IQuestion) => item.id === question.id ? question : item);
    this.questionsService.setQuestions(this.questions);
  }
}

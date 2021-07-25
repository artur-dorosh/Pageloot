import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-question-list-container',
  templateUrl: './question-list-container.component.html',
  styleUrls: ['./question-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionListContainerComponent {
  questions: IQuestion[] = [];

  constructor(private questionsService: QuestionsService) { }

  changeAnswer(question: IQuestion): void {
    this.questions = this.questions.map((item: IQuestion) => item.id === question.id ? question : item);
    this.questionsService.setQuestions(this.questions);
  }

}

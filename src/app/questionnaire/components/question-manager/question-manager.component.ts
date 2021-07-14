import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionManagerComponent {
  questions: IQuestion[] = this.questionsService.getQuestions();

  constructor(private questionsService: QuestionsService) { }

  deleteQuestion(id: string): void {
    this.questions = this.questions.filter((question: IQuestion) => question.id !== id);
    this.questionsService.setQuestions(this.questions);
  }
}

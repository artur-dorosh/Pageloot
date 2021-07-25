import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';
import { BehaviorSubject, Observable } from 'rxjs';

const questions: IQuestion[] = [
  {
    id: '1',
    title: 'Is it single choice question?',
    type: 'single',
    createdDate: '2021-07-14',
    answered: false,
    answeredDate: null,
    answers: ['Simple answer', 'Another answer'],
    finalAnswer: null,
  }, {
    id: '2',
    title: 'Is it multiple choices question?',
    type: 'multiple',
    createdDate: '2021-07-13',
    answered: false,
    answeredDate: null,
    answers: ['First', 'Second'],
    finalAnswer: null,
  }, {
    id: '3',
    title: 'Is it open question?',
    type: 'open',
    createdDate: '2021-07-04',
    answered: false,
    answeredDate: null,
    answers: null,
    finalAnswer: null,
  }, {
    id: '4',
    title: 'Is it answered multiple choices question?',
    type: 'multiple',
    createdDate: '2021-07-10',
    answered: true,
    answeredDate: '2021-07-08',
    answers: ['First', 'Second', 'Third'],
    finalAnswer: ['First', 'Second'],
  }, {
    id: '5',
    title: 'Is it answered single choice question?',
    type: 'single',
    createdDate: '2021-06-26',
    answered: true,
    answeredDate: '2021-07-01',
    answers: ['Simple answer', 'Another answer'],
    finalAnswer: ['Another answer'],
  }, {
    id: '6',
    title: 'Is it open answered question?',
    type: 'open',
    createdDate: '2021-07-04',
    answered: true,
    answeredDate: '2021-07-06',
    answers: null,
    finalAnswer: ['Simple answer to open question'],
  }
]

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions$: BehaviorSubject<IQuestion[]> = new BehaviorSubject<IQuestion[]>(null);

  initData(): void {
    localStorage.getItem('questions')
      ? this.questions$.next(JSON.parse(localStorage.getItem('questions')))
      : this.setQuestions(questions);
  }

  getQuestions(): Observable<IQuestion[]> {
    return this.questions$.asObservable();
  }

  getQuestionById(id: string): IQuestion {
    return this.questions$.getValue().find((question: IQuestion) => question.id === id);
  }

  setQuestions(value: IQuestion[]): void {
    localStorage.setItem('questions', JSON.stringify(value));
    this.questions$.next(value);
  }

  updateQuestion(question: IQuestion): void {
    this.setQuestions(this.questions$.getValue().map((item: IQuestion) => item.id === question.id ? question : item));
  }

  createQuestion(value: IQuestion): void {
    const currentQuestions: IQuestion[] = this.questions$.getValue();
    currentQuestions.push(value);

    this.setQuestions(currentQuestions);
  }

  deleteQuestion(id: string): void {
    this.setQuestions(this.questions$.getValue().filter((question: IQuestion) => question.id !== id));
  }
}

import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';

const questions: IQuestion[] = [
  {
    id: '1',
    title: 'Is it single choice question?',
    type: 'single',
    createdDate: '2021-07-14',
    answered: false,
    answeredDate: null,
    answers: [{ text: 'Simple answer' }, { text: 'Another answer' }],
    finalAnswer: null,
  }, {
    id: '2',
    title: 'Is it multiple choices question?',
    type: 'multiple',
    createdDate: '2021-07-13',
    answered: false,
    answeredDate: null,
    answers: [{ text: 'First' }, { text: 'Second' }],
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
    answers: [{ text: 'First' }, { text: 'Second' }, { text: 'Third' }],
    finalMultipleAnswer: [{ text: 'First' }, { text: 'Second' }],
  }, {
    id: '5',
    title: 'Is it answered single choice question?',
    type: 'single',
    createdDate: '2021-06-26',
    answered: true,
    answeredDate: '2021-07-01',
    answers: [{ text: 'Simple answer' }, { text: 'Another answer' }],
    finalAnswer: 'Another answer',
  }, {
    id: '6',
    title: 'Is it open question?',
    type: 'open',
    createdDate: '2021-07-04',
    answered: true,
    answeredDate: '2021-07-06',
    answers: null,
    finalAnswer: 'Simple answer to open question',
  }
]

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  initData(): void {
    if (!localStorage.getItem('questions')) {
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  getQuestions(): IQuestion[] {
    return JSON.parse(localStorage.getItem('questions'));
  }

  setQuestions(value: IQuestion[]): void {
    localStorage.setItem('questions', JSON.stringify(value));
  }
}

import { IAnswer } from './answer.interface';

export interface IQuestion {
  id: string;
  title: string;
  type: 'single' | 'multiple' | 'open';
  createdDate: string;
  answered: boolean;
  answeredDate: string;
  answers: IAnswer[];
  finalAnswer?: string;
  finalMultipleAnswer?: IAnswer[];
}

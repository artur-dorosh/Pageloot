export interface IQuestion {
  id: string;
  title: string;
  type: 'single' | 'multiple' | 'open';
  createdDate: string;
  answered: boolean;
  answeredDate: string;
  answers: string[];
  finalAnswer: string[];
}

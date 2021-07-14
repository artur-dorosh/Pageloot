import { Pipe, PipeTransform } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';

@Pipe({
  name: 'isAnswered'
})
export class IsAnsweredPipe implements PipeTransform {

  transform(value: IQuestion[], condition: boolean = true): IQuestion[] {
    return value.filter((question: IQuestion) => condition ? question.answered : !question.answered);
  }

}

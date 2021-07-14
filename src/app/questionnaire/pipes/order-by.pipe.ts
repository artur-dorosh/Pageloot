import { Pipe, PipeTransform } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';

const ascSort = (parameter: string) => (a: IQuestion, b: IQuestion): number => {
  if (new Date(a[parameter]) > new Date(b[parameter])) {
    return 1;
  } else if (new Date(a[parameter]) < new Date(b[parameter])) {
    return -1;
  }
  return 0;
};

const descSort = (parameter: string) => (a: IQuestion, b: IQuestion): number => {
  if (new Date(a[parameter]) < new Date(b[parameter])) {
    return 1;
  } else if (new Date(a[parameter]) > new Date(b[parameter])) {
    return -1;
  }
  return 0;
};

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: IQuestion[], dateParameter: string = 'createdDate', direction: string = 'desc'): IQuestion[] {
    return value.slice().sort(direction === 'asc' ? ascSort(dateParameter) : descSort(dateParameter));
  }

}

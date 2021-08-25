import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform {

  transform(count: number): number[] {
    return Array(5).fill(0).map((_, i) => i++);
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform {
  transform(count: number | null): number[] {
    return Array(count || 0).fill(0).map((_, i) => ++i);
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textCrop'
})
export class TextCropPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/^(.{1000}[^s]*).*/, '$1...');
  }

}

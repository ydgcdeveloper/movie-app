import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayJoin'
})
export class ArrayJoinPipe implements PipeTransform {
  transform(value: string[] | null): string {
    return value ? value.join(', ') : '';
  }
}

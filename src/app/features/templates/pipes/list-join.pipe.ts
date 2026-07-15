import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listJoin',
  //   pure: false
})
export class ListJoinPipe implements PipeTransform {
  transform(value: string[]): string {
    console.log('PIPE RAN');
    return value.join(' ');
  }
}

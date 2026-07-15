import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    console.log('PIPE RAN');
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}

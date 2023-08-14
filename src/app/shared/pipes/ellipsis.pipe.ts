import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true,
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, limit: number): string | null {
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}

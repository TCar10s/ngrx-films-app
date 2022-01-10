import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
})
export class PosterPipe implements PipeTransform {
  transform(poster: string): string {
    return poster
      ? `https://image.tmdb.org/t/p/original${poster}`
      : 'assets/no-image.jpg';
  }
}

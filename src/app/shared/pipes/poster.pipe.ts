import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
})
export class PosterPipe implements PipeTransform {
  transform(poster: string, isLowQuality: boolean): string {
    const size = isLowQuality ? 'w185' : 'w500';

    return poster
      ? `https://image.tmdb.org/t/p/${size}${poster}`
      : 'assets/img/no-image.jpg';
  }
}

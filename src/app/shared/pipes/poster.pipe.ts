import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
})
export class PosterPipe implements PipeTransform {
  transform(poster: string, isCastImage: boolean): string {
    const size = isCastImage ? 'w185' : 'w500';

    return poster
      ? `https://image.tmdb.org/t/p/${size}${poster}`
      : 'assets/img/no-image.jpg';
  }
}

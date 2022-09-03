import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {}

  getScrollPosition(): boolean {
    const pos = Math.ceil(document.documentElement.scrollTop + 1000);
    const max = document.documentElement.scrollHeight;

    return pos > max;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {}

  calcularPositionScroll(): boolean {
    const pos = document.documentElement.scrollTop + 1000;
    const max = document.documentElement.scrollHeight;

    return pos > max;
  }
}

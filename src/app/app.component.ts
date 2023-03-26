import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
  value = 'films-app';
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Mejores valoradas',
        icon: 'pi pi-star',
        routerLink: ['/top-rated'],
      },
      {
        label: 'Proximo',
        icon: 'pi pi-calendar',
        routerLink: ['/upcoming'],
      },
    ];
  }

  searchFilm = (text: string) => {
    text = text.trim();

    if (text.length === 0) return;

    this.router.navigate(['/search', text]);
  };
}

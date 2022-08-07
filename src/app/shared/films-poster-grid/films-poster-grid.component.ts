import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from '@core/interfaces/billboard-response';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css'],
})
export class FilmsPosterGridComponent implements OnInit {
  @Input() films$: Observable<Film[]> = new Observable<Film[]>();
  public loader = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => this.loader = false, 1000);
  }

  viewMoreDetails = (id: number) => {
    this.router.navigate(['/film', id]);
  }
}

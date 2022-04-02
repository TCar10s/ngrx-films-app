import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css'],
})
export class FilmsPosterGridComponent implements OnInit {
  @Input() films$: Observable<Film[]> = this.filmService.films$;
  public loader: boolean = true;

  constructor(private route: Router, private filmService: FilmsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }

  viewMoreDetails = (film: Film) => {
    this.route.navigate(['/film', film.id]);
  };
}

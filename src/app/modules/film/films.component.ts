import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDetails } from 'src/app/core/interfaces/film-details';
import { FilmsService } from 'src/app/core/services/films.service';
import { Location } from '@angular/common';
import { Cast } from '@core/interfaces/credits-response';
import { combineLatest } from 'rxjs';
import { Trailer } from '@core/interfaces/trailer-response';

/*
  El combineLatest recibe una cantidad x de observables y regresa
  un array con todas las respuestas de los observables cuando ya
  han emitido por lo menos 1 valor todos.
*/

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  public film: FilmDetails = {} as FilmDetails;
  public cast: Cast[] = [{} as Cast];
  public trailer: Trailer = {} as Trailer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmsService,
    private location: Location,
    private router: Router,
  ) {
    this.cast = [];
  }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;

    combineLatest([
      this.filmService.getFilmsDetails(id),
      this.filmService.getCast(id),
      this.filmService.getTrailer(id)
    ]).subscribe(([film, cast, trailer]) => {
      if (!film) {
        return this.router.navigateByUrl('/home');
      }
      this.cast = cast.filter((actor) => actor.profile_path);
      this.film = film;
      this.trailer = trailer[0];
    });
  }

  backPage = (): void => {
    this.location.back();
  }
}

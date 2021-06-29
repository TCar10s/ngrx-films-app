import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDetails } from 'src/app/interfaces/film-details';
import { FilmsService } from 'src/app/services/films.service';
import { Location } from '@angular/common';
import { OnDestroy } from '@angular/core';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';

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
export class FilmsComponent implements OnInit, OnDestroy {
  public film: FilmDetails;
  public cast: Cast[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmsService,
    private location: Location,
    private router: Router
  ) {
    this.cast = [];
  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.filmService.getFilmsDetails(id),
      this.filmService.getCast(id),
    ]).subscribe(([film, cast]) => {
      if (!film) return this.router.navigateByUrl('/home');
      this.film = film;
      this.cast = cast.filter((actor) => actor.profile_path);
    });

    // this.filmService.getFilmsDetails(id).subscribe((film) => {
    //   if (!film) {
    //     return this.router.navigateByUrl('/home');
    //   }
    //   this.film = film;
    // });

    // this.filmService.getCast(id).subscribe((cast) => {
    //   this.cast = cast.filter((actor) => actor.profile_path);
    // });
  }

  backPage = () => {
    this.location.back();
  };

  ngOnDestroy() {
    this.filmService.resetBillboardPage();
  }
}

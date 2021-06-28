import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDetails } from 'src/app/interfaces/film-details';
import { FilmsService } from 'src/app/services/films.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  public film: FilmDetails;
  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.filmService.getFilmsDetails(id).subscribe((film) => {
      console.log(film);
      this.film = film;
    });
  }

  backPage = () => {
    this.location.back();
  };
}

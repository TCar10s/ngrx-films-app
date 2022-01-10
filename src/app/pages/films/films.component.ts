import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDetails } from 'src/app/interfaces/film-details';
import { FilmsService } from 'src/app/services/films.service';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';
import { Trailer } from '../../interfaces/trailer-response';

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
export class FilmsComponent implements OnInit, AfterViewInit, OnDestroy {
  public film: FilmDetails;
  public cast: Cast[];
  public trailer: Trailer;

  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmsService,
    private location: Location,
    private router: Router,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.cast = [];
  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.filmService.getFilmsDetails(id),
      this.filmService.getCast(id),
      this.filmService.getTrailer(id)
    ]).subscribe(([film, cast, trailer]) => {
      if (!film) return this.router.navigateByUrl('/home');
      this.cast = cast.filter((actor) => actor.profile_path);
      this.film = film;
      this.trailer = trailer[0];
    });
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(
      this.demoYouTubePlayer?.nativeElement?.clientWidth,
      1200
    );
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  };

  backPage = () => {
    this.location.back();
  };

  ngOnDestroy(): void {
    this.filmService.resetBillboardPage();
    window.removeEventListener('resize', this.onResize);
  }
}

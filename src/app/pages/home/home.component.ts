import { Component, HostListener, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public films: Film[];
  public filmsSlider: Film[];
  public loader: boolean;
  public properties: any;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.getMoreFilms();
  }

  constructor(private filmServices: FilmsService) {
    this.films = [];
    this.loader = true;
    this.properties = {};
  }

  ngOnInit(): void {
    this.properties = {
      'border-radius': '5px',
      height: '450px',
      'background-color': '#1F2D40',
    };

    this.filmServices.getBillboard().subscribe((resp) => {
      setTimeout(() => {
        this.films = resp;
        this.filmsSlider = resp;
        this.loader = false;
      }, 1000);
    });
  }

  getMoreFilms = () => {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      // TODO: llamar el servicio
      if (this.filmServices.loading) return;
      this.filmServices.getBillboard().subscribe((films) => {
        this.films.push(...films);
      });
    }
  };
}

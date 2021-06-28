import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public films: Film[];
  public loader: boolean;

  constructor(private filmServices: FilmsService) {
    this.films = [];
    this.loader = true;
  }

  ngOnInit(): void {
    this.filmServices.getBillboard().subscribe((resp) => {
      this.films = resp.results;
      this.loader = false;
    });
  }
}

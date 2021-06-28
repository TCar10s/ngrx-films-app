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
  public properties: any;

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
        this.films = resp.results;
        this.loader = false;
      }, 1000);
    });
  }
}

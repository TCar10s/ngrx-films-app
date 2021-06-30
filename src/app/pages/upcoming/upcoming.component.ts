import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/billboard-response';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  public films: Film[];

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    this.filmService.getByCategory('upcoming').subscribe((resp) => {
      this.films = resp;
    });
  }
}

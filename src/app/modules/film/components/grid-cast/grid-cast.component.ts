import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '@core/interfaces/cast-response';

@Component({
  selector: 'app-grid-cast',
  templateUrl: './grid-cast.component.html',
  styleUrls: ['./grid-cast.component.css']
})
export class GridCastComponent implements OnInit {

  @Input() cast: Cast[] = [{} as Cast];

  constructor() {}

  ngOnInit(): void {}
}

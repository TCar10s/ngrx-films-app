import { Component, Input, OnInit } from '@angular/core';
import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit {

  @Input() cast: Cast[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.cast);
    
  }

}

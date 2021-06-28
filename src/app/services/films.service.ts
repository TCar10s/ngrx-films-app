import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillboardResponse } from '../interfaces/billboard-response';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  getBillboard = (): Observable<BillboardResponse> => {
    return this.http.get<BillboardResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=53ceb5e3f56ca0319b494fb285f4283a&language=en-ES&page=1'
    );
  };
}

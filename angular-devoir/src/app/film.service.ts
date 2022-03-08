import { Injectable } from '@angular/core';
import { Film, Genre } from './types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  // URL absolue
  serverUrl = 'https://movie-api.benoithubert.me';
  // chemin relatif sur le serveur
  filmsPath = '/movies';
  genrePath = '/genres';
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}  
  
  private handleError(error: HttpErrorResponse | string) {
    // TODO: trouver une façon plus élégante
    if (typeof error === 'string') {
      return throwError(error);
    }
    let errorMessage = '';
    switch (error.status) {
      case 0:
        errorMessage = 'A network error occurred. Please come back later';
        break;
      case 400:
        errorMessage = 'There are missing or misformated fields.';
        break;
      case 404:
        errorMessage = 'This post does not exist anymore.';
        break;
      default:
        errorMessage = 'An unexpected error occurred.';
    }
    return throwError(errorMessage);
  }

  getAllFilms(): Observable<Film[]> {
    return this.http
      .get<Film[]>(
        `${this.serverUrl}${this.filmsPath}`
      )
      .pipe();
      
  }

  getAllGenre(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>(
        `${this.serverUrl}${this.genrePath}`
      )
      .pipe();
      
  }

  getFilm(id: number): Observable<Film> {
    return this.http
      .get<Film>(
        `${this.serverUrl}${this.filmsPath}/${id}`
      )
      .pipe();
  }
}

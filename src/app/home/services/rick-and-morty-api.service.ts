import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyApiService {
  private episodesApiUrl = 'https://rickandmortyapi.com/api/episode/';
  private charactersApiUrl = 'https://rickandmortyapi.com/api/character/';

  // Propiedad para almacenar los personajes seleccionados
  private charactersData: any[] = [];

  constructor(private http: HttpClient) {}

  // Obtener episodios
  getEpisodes(): Observable<any[]> {
    return this.http.get<any>(this.episodesApiUrl).pipe(
      map((response) => response.results)
    );
  }

  // Obtener detalles de personajes por URLs y almacenar los datos temporalmente
  getCharacters(characterUrls: string[]): Observable<any[]> {
    const characterIds = characterUrls.map((url) => url.split('/').pop()).join(',');
    return this.http.get<any[]>(`${this.charactersApiUrl}${characterIds}`).pipe(
      map((data) => {
        this.charactersData = Array.isArray(data) ? data : [data]; // Guarda los personajes
        return this.charactersData;
      })
    );
  }

  // Método para obtener los personajes almacenados
  getStoredCharacters(): any[] {
    return this.charactersData;
  }
}

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

  private charactersData: any[] = [];

  constructor(private http: HttpClient) {}

  getEpisodes(): Observable<any[]> {
    return this.http.get<any>(this.episodesApiUrl).pipe(
      map((response) => response.results)
    );
  }

  getCharacters(characterUrls: string[]): Observable<any[]> {
    const characterIds = characterUrls.map((url) => url.split('/').pop()).join(',');
    return this.http.get<any[]>(`${this.charactersApiUrl}${characterIds}`).pipe(
      map((data) => {
        this.charactersData = Array.isArray(data) ? data : [data]; 
        return this.charactersData;
      })
    );
  }

  getStoredCharacters(): any[] {
    return this.charactersData;
  }
}

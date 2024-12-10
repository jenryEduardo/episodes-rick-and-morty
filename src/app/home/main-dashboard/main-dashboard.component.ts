import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickAndMortyApiService } from '../services/rick-and-morty-api.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  episodes: any[] = [];
  favorites: any[] = []; 
  showFavorites: boolean = false;

  constructor(private service: RickAndMortyApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchEpisodes();
    const navigation = history.state;
    this.favorites = navigation.favorites || [];
  }

  fetchEpisodes(): void {
    this.service.getEpisodes().subscribe({
      next: (data) => {
        this.episodes = data;
      },
      error: () => {
        console.log('Error al obtener episodios');
      },
    });
  }

  fetchCharacters(characterUrls: string[]): void {
    this.service.getCharacters(characterUrls).subscribe({
      next: (data) => {
        this.router.navigate(['/characters'], { state: { characters: data, favorites: this.favorites } });
      },
      error: () => {
        console.log('Error al obtener personajes');
      },
    });
  }

  removeFromFavorites(character: any): void {
    this.favorites = this.favorites.filter(fav => fav.id !== character.id);
  }
}

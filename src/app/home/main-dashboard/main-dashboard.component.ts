import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../services/rick-and-morty-api.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  episodes: any[] = [];
  characters: any[] = [];
  selectedCharacter: any = null; // Almacena el personaje seleccionado
  showModal: boolean = false; // Controla la visibilidad del modal

  constructor(private service: RickAndMortyApiService) {}

  ngOnInit(): void {
    this.fetchEpisodes();
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
        this.characters = data;
      },
      error: () => {
        console.log('Error al obtener personajes');
      },
    });
  }


  openModal(character: any): void {
    this.selectedCharacter = character;
    this.showModal = true;
  }


  closeModal(): void {
    this.showModal = false;
    this.selectedCharacter = null;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  characters: any[] = [];
  displayedCharacters: any[] = [];
  selectedCharacter: any = null;
  showModal: boolean = false;

  currentPage: number = 1;
  itemsPerPage: number = 6;

  favorites: any[] = []; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const navigation = history.state;
    this.characters = navigation.characters || [];
    this.favorites = navigation.favorites || [];
    this.updateDisplayedCharacters();
  }

  openModal(character: any): void {
    this.selectedCharacter = character;
    this.showModal = true;
  }

  closeModal(): void {
    this.selectedCharacter = null;
    this.showModal = false;
  }

  toggleFavorite(character: any): void {
    const index = this.favorites.findIndex(fav => fav.id === character.id);
    if (index === -1) {
      this.favorites.push(character); 
    } else {
      this.favorites.splice(index, 1); 
    }
  }

  isFavorite(character: any): boolean {
    return this.favorites.some(fav => fav.id === character.id);
  }

  goBack(): void {
    this.router.navigate(['/dashboard'], { state: { favorites: this.favorites } });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedCharacters();
    }
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.characters.length) {
      this.currentPage++;
      this.updateDisplayedCharacters();
    }
  }

  private updateDisplayedCharacters(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedCharacters = this.characters.slice(startIndex, endIndex);
  }
}

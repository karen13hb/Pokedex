import { Component } from '@angular/core';
import { Pokemon } from './interface/pokemonResponse';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  selectedPokemon!: Pokemon | null;

  handlePokemonSelected(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  backHome(){
    this.selectedPokemon = null;
  }
  rotateButton(event: MouseEvent, rotate: boolean): void {
    const img = event.currentTarget as HTMLElement;
    if (rotate) {
      img.style.transform = 'translateX(-50%) rotate(360deg)';
    } else {
      img.style.transform = 'translateX(-50%) rotate(0deg)';
    }
  }
  
  
 
}

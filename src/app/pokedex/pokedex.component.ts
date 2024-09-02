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

 
}
